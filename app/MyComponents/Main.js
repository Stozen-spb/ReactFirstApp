import React from 'react';
import ReactDOM from 'react-dom';
import BMRInfo from './BMRInfo.js';
import BMRcalculator from './BMRcalculator.js';
import RightColumn from './RightColumn.js';



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

// ReactDOM.render (
// 	<BMRInfo />, document.getElementById('yourBMRBigInfo')

// )

//BMRInfo.setState({currentBMR:calcedBMR});