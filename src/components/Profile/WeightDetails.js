import React, {Component} from 'react';

export default class  MemberInfo extends Component{
	
	render(){
		return (
            <div className="container">
            <div className="crop">
 		  <img align="center" src="http://img1.jurko.net/wall/paper/donald_duck_4.jpg" />
            </div>
                  <div>

                        <table>
                              <tbody >
                                    <tr>
                                          <td width= {190}>
                                                <div style={{border:'1px solid lightgrey'}}>
                                                      <p><b>{this.props.data.details.age}</b></p><br/>
                                                      <p>Age</p>
                                                </div>
                                          </td>
                                          <td width= {190}>
                                                <div style={{border:'1px solid lightgrey'}}>
                                                      <p><b>{this.props.data.details.bloodGroup}</b></p><br/>
                                                      <p>Blood Group</p>
                                                </div>
                                          </td>
                                          <td width= {190}>
                                                <div style={{border:'1px solid lightgrey'}}>
                                                      <p><b>{this.props.data.details.bmi}</b></p><br/>
                                                      <p>BMI</p>
                                                </div>
                                          </td>
                                    </tr>
                                    <tr height={10} >
                                          
                                          <td width= {190}>
                                                <div style={{border:'1px solid lightgrey'}}>
                                                      <p><b>{this.props.data.details.weight}</b></p><br/>
                                                      <p>Weight</p>
                                                </div>
                                          </td>
                                          <td width= {190}>
                                                <div style={{border:'1px solid lightgrey'}}>
                                                      <p><b>{this.props.data.details.fat}</b></p><br/>
                                                      <p>Fat</p>
                                                </div>
                                          </td>
                                          <td width= {190}>
                                                <div style={{border:'1px solid lightgrey'}}>
                                                      <p><b>{this.props.data.details.height}</b></p><br/>
                                                      <p>Height</p>
                                                </div>
                                          </td>
                                    </tr>
                                    
                              </tbody>
                        </table>
                  </div>
             </div>
			);
	}
}