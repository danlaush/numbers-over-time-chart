import React, { Component } from 'react';
import { format } from 'date-fns';
import Chart from 'chart.js';
import './Category.css';

class Category extends Component {
  // Hacky/not how classes should be used. 
  // Only used during loading
  currentDate = new Date()

  state = {
    days: [
      {
        date: this.currentDate,
        number: 0,
        entries: []
      }
    ],
    activeDate: 0,
    nextDateEnabled: false,
    prevDateEnabled: true
  }


  componentDidMount = () => {
    this.chartCtx = document.getElementById('myChart').getContext('2d');
    this.myChart = new Chart(this.chartCtx, {
      type: 'line',
      data: {
        datasets: [{
          label: '# of Votes',
          data: [{
            x: "2017-12-17",
            y: 85
          },{
            x: "2017-12-14",
            y: 89
          },{
            x: "2017-12-10",
            y: 87
          },{
            x: "2017-12-07",
            y: 96
          }],
          pointBackgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          pointBorderColor: [
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)'
          ],
          pointRadius: [
            4,
            4,
            4,
            4
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            display: true,
            type: 'time'
          }],
          yAxes: [{
            display: true
          }]
        },
        onClick: function(evt, activeElements) {
          if(activeElements[0] !== undefined) {
            let elementIndex = activeElements[0]._index;
            console.log(this.data.datasets[0].data[elementIndex]);
            this.data.datasets[0].pointBackgroundColor[elementIndex] = 'black';
            this.data.datasets[0].pointBorderColor[elementIndex] = 'green';
            this.data.datasets[0].pointRadius[elementIndex] = 7;
            this.update();
          }
        }
      }
    });

    // why fetch in cDM?
    // https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
    fetch('/categories')
      .then(res => res.json())
      .then(category => {
        let activeDate = 0;
        // let chartData = category.days.map()
        this.setState({ 
          ...category,
          activeDate
        });
      });
  }

  updateActiveDate = (e) => {
    let updatedDate, nextEnabled, prevEnabled;
    if(e.target.id === 'nextDate' && this.state.nextDateEnabled) {
      updatedDate = this.state.activeDate - 1;
    }
    if(e.target.id === 'prevDate' && this.state.prevDateEnabled) {
      updatedDate = this.state.activeDate + 1;
    }
    nextEnabled = (updatedDate - 1 < 0) ? false : true;
    prevEnabled = (updatedDate + 1 > this.state.days.length - 1) ? false : true;
    this.setState({
      activeDate: updatedDate,
      nextDateEnabled: nextEnabled,
      prevDateEnabled: prevEnabled
    });
  }

  render() {
    return (
      <div className="Category">
        
        <h2>Category: {this.state.name}</h2>
        <div className="Category-jumbotron">
          <canvas id="myChart" width="400" height="200"></canvas>
          <div className="Category-activeNumber">{this.state.days[this.state.activeDate].number} {this.state.numberLabel}</div>
        </div>
        <div className="Category-activeDate">
          <button 
            id="prevDate"
            onClick={this.updateActiveDate}
            disabled={!this.state.prevDateEnabled}>
            &laquo;
          </button>
          <span>{format(this.state.days[this.state.activeDate].date, 'D MMM')}</span>
          <button 
            id="nextDate"
            onClick={this.updateActiveDate}
            disabled={!this.state.nextDateEnabled}>
            &raquo;
          </button>
        </div>
        <table className="Category-activeEntries">
          <thead>
            <tr>
              <th>Time</th>
              <th>Number</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.days[this.state.activeDate].entries).map((time, index) => (
              <tr key={index}>
                <td>{time}</td>
                <td>{this.state.days[this.state.activeDate].entries[time].number} {this.state.numberLabel}</td>
                <td>{this.state.days[this.state.activeDate].entries[time].notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Category;
