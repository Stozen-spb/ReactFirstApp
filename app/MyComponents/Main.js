// Basal metabolic rate calculator and daily food ccal counter by Alexander Kurkin




import React from 'react';
import ReactDOM from 'react-dom';
import BMRInfo from './BMRInfo.js'; // this component only show current BMR
import BMRcalculator from './BMRcalculator.js'; // Calculator body
import RightColumn from './RightColumn.js'; // current day ccal counter and days list



class MainComponent extends React.Component {
	constructor() {
	super();
	this.state = {
		currentBMR: null,

		}	
	}
	_getCalculatedBMR(calcedBMR) {
	this.setState({
			currentBMR: calcedBMR
		});
	
	

	
	}
	render() {
		
	
		return (
			<div>
				<BMRcalculator callbackFromParent= {this._getCalculatedBMR.bind(this)} currentBMR={this.state.currentBMR} />
				<BMRInfo currentBMR={this.state.currentBMR} />
				<RightColumn currentBMR={this.state.currentBMR} />
				
			</div>	
			)
	}
}




ReactDOM.render (
	<MainComponent />, document.getElementById('BMRcalculator')

	)

