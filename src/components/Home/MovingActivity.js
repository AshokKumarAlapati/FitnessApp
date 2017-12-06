import React, {Component} from 'react';
//import react-chartjs-2,{HorizontalBar} from 'react-chartjs-2';
//import MyLineChart from '../../MyLineChart';
import {LineChart, Line}from 'recharts';
import WelcomePanel from './WelcomePanel';
import Activity from './Activity';

export default class  MovingActivity extends Component{
      
      render(){
            
         return (
            <div className="container">
                  <WelcomePanel  data={this.props.data} />
                  <table>
                  <tbody>
                  <tr>
                  <td>
                  <div style={{border:'1px solid lightgrey'}}>
                        <p><b>{this.props.data.details.temperature[4].value}</b>&#176;</p><br/>
                        <p>Temperature</p>
                        <LineChart height={50} width= {190} data={this.props.data.details.temperature}>
                              <Line  type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                  </div>
                  </td>

                  <td>
                  <div style={{ border:'1px solid lightgrey'}}>
                        <p><b>{this.props.data.details.caloriesBurned[4].value}</b>cal</p><br/>
                        <p> Calories Burned</p>
                        <LineChart height={50} width= {190} data={this.props.data.details.caloriesBurned}>
                              <Line  type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                  </div>
                  </td>
                  </tr>

                   <tr>
                  <td>
                  <div style={{ border:'1px solid lightgrey'}}>
                        <p><b>{this.props.data.details.steps[4].value}</b>Steps</p><br/>
                        <p>Steps</p>
                        <LineChart height={50} width= {150} data={this.props.data.details.steps}>
                              <Line  type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                  </div>
                  </td>

                  <td>
                  <div style={{ border:'1px solid lightgrey'}}>
                        <p><b>{this.props.data.details.heartBeat[4].value}</b>bpm</p><br/>
                        <p>Heart Rate</p>
                        <LineChart height={50} width= {150} data={this.props.data.details.heartBeat}>
                              <Line  type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                  </div>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  <Activity data={this.props.data.details.activity}/>

             </div>
                  );
      }
}

