import React, {Component} from 'react';
import {ComposedChart, Line, Area, } from 'recharts';
class Activity extends Component{
	
	render(){
		return  ( 
			<div>
				<ComposedChart width={400} height={150} data={this.props.data}>
          			
          			
          			<Area type='monotone' dataKey='value' fill='#8884d8' stroke='#8884d8'/>
		          <Line type='monotone' dataKey='avg' stroke='#ff7300'/>
       			</ComposedChart>
       			</div>
				);
	}
}

export default Activity;