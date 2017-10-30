import React, { Component } from 'react';
import { format } from 'date-fns';
import Chart from 'chart.js';
import LineChart from '../../components/LineChart';
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
        console.log(this.state);
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
          <LineChart 
            data={this.state.days}
            />
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
