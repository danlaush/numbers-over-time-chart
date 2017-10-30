// called by category component
//     shares category's active date & chart data
// draws a chart with some internal state to handle how the chart looks and functions
//     includes visually styling the active data point in the graph
// TODO: Sigh... I think I need to extend Chart.js to have an "active" node
// 		 in a sane API
// adapts to changes sent down by the parent category
//     changes to the active date (day changes) & chart data (category changes)
// listens for input on data points
// can update parent category's active date

// import chart.js
// LineChart has
// props // from category component
// TODO:    active date
// TODO:    chart data
// TODO:    updateActiveDate fn
// a container element
// a canvas element
// a 2d context
// a chart object, which has
//     chart.js functionality
// TODO:    some chart.js-related options?
// TODO:        custom extend to support active node
// TODO:    a dataset
// TODO:    an active index // active date
// TODO:    an onclick handler on data points (vv that function vv)
// TODO:an onclick handler function for the chart object
// TODO:    update the active chart index/ active date (fn from category component)
// TODO:    update css classes on data points to visually represent the new active date
// [need reference to dom elements of data points in chart, in order to update class of active data point for styling]
import React, { Component } from 'react';
import { format } from 'date-fns';
import Chart from 'chart.js';
import './LineChart.css';

class LineChart extends Component {

	constructor = (props) => {
		super(props);
		this.state = {
			chartCtx: null,
			lineChart: null,
			pointStyle: {
				pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
				pointBorderColor: 'rgba(255,99,132,1)',
				pointRadius: 4
			},
			pointStyleHover: {
				pointBackgroundColor: 'black',
				pointBorderColor: 'green',
				pointRadius: 7
			},
			pointStyleActive: {
				pointBackgroundColor: 'blue',
				pointBorderColor: 'white',
				pointRadius: 7
			},
			data: {
	      datasets: [{
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
	        pointBackgroundColor: 'rgba(255, 99, 132, 0.5)',
	        pointBorderColor: 'rgba(255,99,132,1)',
	        pointRadius: 4,
	        borderColor: 'rgba(255,99,132,1)',
	        borderWidth: 2,
	        fillColor: 'rgba(255, 99, 132, 0.5)',
	        fill: true
	      }]
	    }
		};

		this.selectors = {
			canvas: 'LineChart__canvas'
		};
	}

	componentDidMount = () => {
		console.log(this.props);
		let ctx = document.getElementById(this.selectors.canvas).getContext('2d');
		let chart = new Chart(ctx, {
      type: 'line',
      data: this.state.data,
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
        onClick: this.onDataClick,
        onHover: this.onDataHover
      }
    });
    this.setState({
    	chartCtx: ctx,
    	lineChart: chart
    });
	}

	onDataClick = (e, activeElements) => {
    if(activeElements[0] !== undefined) {
    	// first reset the styles on all data points
    	this.state.data.datasets[0].pointBackgroundColor.fill(
    		this.state.pointStyle.pointBackgroundColor
    	);
    	this.state.data.datasets[0].pointBorderColor.fill(
    		this.state.pointStyle.pointBorderColor
    	);
    	this.state.data.datasets[0].pointRadius.fill(
    		this.state.pointStyle.pointRadius
    	);

    	// then set the clicked data point to be active
      let elementIndex = activeElements[0]._index;
      console.log(this.state.data.datasets[0].data[elementIndex]);
      this.state.data.datasets[0].pointBackgroundColor[elementIndex] = this.state.pointStyleActive.pointBackgroundColor;
      this.state.data.datasets[0].pointBorderColor[elementIndex] = this.state.pointStyleActive.pointBorderColor;
      this.state.data.datasets[0].pointRadius[elementIndex] = this.state.pointStyleActive.pointRadius;
    }
    this.state.lineChart.update();
	}

	// onDataHover = (e, activeElements) => {
 //    if(activeElements[0] !== undefined) {
 //      let elementIndex = activeElements[0]._index;
 //      this.state.data.datasets[0].pointBackgroundColor[elementIndex] = this.state.pointStyleHover.pointBackgroundColor;
 //      this.state.data.datasets[0].pointBorderColor[elementIndex] = this.state.pointStyleHover.pointBorderColor;
 //      this.state.data.datasets[0].pointRadius[elementIndex] =  this.state.pointStyleHover.pointRadius;
 //    } else {
 //    	this.state.data.datasets[0].pointBackgroundColor.fill(
 //    		this.state.pointStyle.pointBackgroundColor
 //    	);
 //    	this.state.data.datasets[0].pointBorderColor.fill(
 //    		this.state.pointStyle.pointBorderColor
 //    	);
 //    	this.state.data.datasets[0].pointRadius.fill(
 //    		this.state.pointStyle.pointRadius
 //    	);
 //    }
 //    this.state.lineChart.update();
	// }

	render = () => {
    return (
      <div className="LineChart">
        <canvas id={this.selectors.canvas} width="400" height="200"></canvas>
      </div>
    )
	}
}

export default LineChart;
