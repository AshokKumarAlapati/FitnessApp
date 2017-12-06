import React, {Component} from 'react';
class WelcomePanel extends Component{
	
	render(){
		return  ( 
				<div style ={{height:'100px', border:'1px solid lightgrey'}} className=""> 
					<p>Welcome back {this.props.data.name}</p>
					<p>Things look <span style={{color:'blue'}}>{this.props.data.status}</span></p>
				</div>
			);
	}
}

export default WelcomePanel;