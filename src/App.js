import React, { Component } from 'react';

import MovingActivity from './components/Home/MovingActivity';
import WeightDetails from './components/Profile/WeightDetails';
import Goal from './components/Goal/Goal';


import {PopulationData} from './components/AppData';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

        <div className="container-wrapper" >
        	<table>
        	<tbody>
           		<tr>
           		<td><MovingActivity data = {PopulationData}/></td>
           		<td><WeightDetails data = {PopulationData} /></td>
           	<td><Goal data = {PopulationData} /></td> 
           		</tr>
           		</tbody>
           		</table>
           
        </div>
    );
  }
}

export default App;
