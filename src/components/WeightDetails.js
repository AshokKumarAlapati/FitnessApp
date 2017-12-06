import React, {Component} from 'react';

export default class  MemberInfo extends Component{
	
	render(){
		return (
            <div className="container">
            <div className="crop">
 				<img src="http://img1.jurko.net/wall/paper/donald_duck_4.jpg" />
            </div>
                  <div>
                    Age {this.props.data.details[1].age} <br />
                   Blood Group {this.props.data.details[1].bloodGroup} <br />
                   Bmi {this.props.data.details[1].bmi} <br />
                   Weight {this.props.data.details[1].weight} <br />
                   Height {this.props.data.details[1].height} <br />
                   Fat {this.props.data.details[1].fat} 
                  </div>
             </div>
			);
	}
}