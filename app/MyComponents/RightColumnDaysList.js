import React from 'react';
import DayItem from './DayItem.js';

export default class RightColumnDaysList extends React.Component {
	render(){
		
		var days = this.props.days;

		return (

			<div className="finished-days">

			{ days.map ( (days, index) =>  { return <DayItem key={index} date={days.date} bmr={days.bmr} dayEaten={days.summa} />} ) }

			</div>

			)
	}
}