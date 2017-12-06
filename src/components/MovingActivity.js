import React, {Component} from 'react';
import Chart from 'Chart';
//import react-chartjs-2,{HorizontalBar} from 'react-chartjs-2';
import MyLineChart from './MyLineChart';

export default class  MemberInfo extends Component{
	constructor(props)
	{
		super(props);
	}
	render(){
            
		let temp = this.props.data.details[0].temperature;
		let calories = this.props.data.details[0].caloriesBurned;
		let hbeat = this.props.data.details[0].heartBeat;
		let steps = this.props.data.details[0].steps;
		return (
            <div className="container">
                  <MyLineChart />
                  <MyLineChart />
                  <MyLineChart />
                  <MyLineChart />
                  <MyLineChart />
             </div>
			);
	}
}

function charDetails(data1,labelValue)
{
	console.log(data1);
	var data = [];
	  data.push(data1);
    var label = labelValue;
	return {
       	labels:["temp"],
       	datasets:[{label,data,backgroundColor:['rgba(255, 0, 150, 0.2)']}],
       	options: {
      showScale:false
    }
       
	};
}