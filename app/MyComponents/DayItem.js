import React from 'react';

export default class dayItem extends React.Component {
	render () {
		return (

				<div className="finished-day">
					<p className="day-count">Дата: {this.props.date}  </p>
					<p className="BMR-norm"> Норма: {this.props.bmr} ккал</p>
					<p className="eaten"> Скушано: {this.props.dayEaten} ккал </p>
					<p className="difference"> Разница { this.props.dayEaten - this.props.bmr }ккал </p>
				</div>
			)
	}
}