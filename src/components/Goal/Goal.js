import React, {Component} from 'react';

export default class  MemberInfo extends Component{
	constructor(props)
	{
		super(props);
		this.state = {current:new Date()}
	}
	render(){
		       
		return (
            <div className="container">
            	<div className="weightDetails">
            	    <table>
            	      <tbody>
            	           <tr height={70}>
            	           	<td width= {200}>
            	           		<h1>{this.props.data.details.bodyWeight}</h1> Body Weight
            	           	</td>
            	           	<td width={200} align="left">
            	           	   K.g  
            	           	</td>
            	           	</tr>
            	           	
            	           	<tr>
            	           	 <td>
            	           	  Minimum Weight {this.props.data.details.minWeight} <br />
                  			 Maxmum Weight {this.props.data.details.maxWeight} 
            	           	 </td>
            	           	</tr>
            	      </tbody>
            	    </table>
                </div>   
                
             </div>
			);
	}
}