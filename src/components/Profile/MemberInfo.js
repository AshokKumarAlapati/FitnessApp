import React, {Component} from 'react';

export default class  MemberInfo extends Component{
	constructor(props)
	{
		super(props);
	}
	render(){
		return (
            <div className="container">
                   Welcome back {this.props.data.name}
             </div>
			);
	}
}