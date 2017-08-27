import React from 'react';


 export default class BMRInfo extends React.Component {
 	
	render() {
		return (
			<div className="your-BMR">
				<span> Ваша текущая дневная норма:</span> 
				<div className="BMR-value"><span> {this.props.currentBMR} </span> <b>ккал</b></div>
			</div>

			)
	}
}

