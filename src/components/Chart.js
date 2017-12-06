import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {PopulationData} from './AppData';
class Chart extends Component{
	
	render(){
		return  (
				<div className="chart"> 
					<Line 
						data={PopulationData.chartData}
						options={{
							maintainAspectRatio: false
						}}
					/ >
				</div>
			);
	}
}

export default Chart;