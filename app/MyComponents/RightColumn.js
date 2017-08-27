import React from 'react';
import RightColumnDaysList from './RightColumnDaysList.js';





export default class RightColumn extends React.Component {

	

	constructor() {
	super();
	this.state = {
		currentDayFood: [
			// {
			// 	name: 'Bread',
			// 	ccal: '200'
			// },
			// {
			// 	name: 'Milk',
			// 	ccal: '300'
			// },
			// {
			// 	name: 'Meat',
			// 	ccal: '500'
			// },

		],

		days: [ 
		{
			date: 1,
			bmr: 1200,
			summa: 1300
		},
		{
			date: 2,
			bmr: 1200,
			summa: 1150,
		},
		{ 
			date: 3,
			bmr: 1200,
			summa: 1177,

		}

		],

	}
	this.alertfunc = function () {
		if (this.props.currentBMR ==  undefined) 
			alert ('Пожалуйста, рассчитайте вашу норму ккал');	

		}
	this.SummOfCcal = 0;		
	}

	componentDidMount() { 
	window.addEventListener('load', this.alertfunc.bind(this));	
	}

	
		eatFood(event) { 
			event.preventDefault();
			let eatenObject = {
				name: this._eatenItem.value,
				ccal: this._eatenItemCcal.value
			};
			if ( this._eatenItem.value == '' || this._eatenItemCcal.value == '' )
				return false;
			let arrayvar = this.state.currentDayFood.slice();
			arrayvar.push(eatenObject);
			this.setState({ currentDayFood: arrayvar });
			 this.SummOfCcal += + this._eatenItemCcal.value;
			 this._eatenItem.value = '';
			 this._eatenItemCcal.value = '';
		}

		submitDay(event) {
			event.preventDefault();
			if (!this.SummOfCcal > 0) 
				return false;
			let date = new Date ();
			let dateDay = date.getDate();
			let dateMonth = date.getMonth() + 1;

			event.preventDefault;
			let day = {
			date: dateDay + '.' + dateMonth,
			bmr: this.props.currentBMR,
			summa: this.SummOfCcal ,
			};
			let arrayvar = this.state.days.slice();
			arrayvar.push(day);
			this.setState({ days: arrayvar });
			this.setState({currentDayFood: []});
			this.SummOfCcal = 0;


		}



	render() {
		var normaStyle =getComputedStyle( document.querySelector('.BMR-diagram') );
		var normaWidth = Math.round ( parseInt(normaStyle.width) );
		var skushanoZaDen= document.querySelector('.current-ccal');
		skushanoZaDen.style.width = normaWidth + 'px';
		skushanoZaDen.style.width = (this.SummOfCcal / this.props.currentBMR) * normaWidth + 'px';

		if ( (this.SummOfCcal / this.props.currentBMR) > 1 ) {
			skushanoZaDen.style.backgroundColor = 'red';
		}

		
	
		var currentDayFood = this.state.currentDayFood;


	

		return (
			<div className="right-column">
			<div className="current-day">
			<b className="current-day-title"> Текущий день</b>
				<form action="#echo" name="currentDay">
					<div className="add-items-to-day">
						<div className="left">
							<label htmlFor=""> Что скушал: </label>
							<input type="text" name="foodname" ref={ input => this._eatenItem = input}/>
							<label htmlFor=""> Ккал:</label>
							<input type="text" name="foodCcal" ref={ input => this._eatenItemCcal = input}/>
						</div>
						<div className="right">
							<button onClick={this.eatFood.bind(this)} className="add-item" type="button" name="addItem"> Ням! </button>
							<input onClick= {this.submitDay.bind(this)} className="submit-day" type="submit" value="Завершить день" name="SubmitDay"/>
							
							
						</div>
						
						
					</div>	
				</form>
				<div className="day-diagram-container">
					<div className="left">
					<p className="foodlist-title">Скушано сегодня</p>
						<ol className="foodlist">
							{currentDayFood.map( (currentDayFood, index) => { return <li key={index} > {currentDayFood.name + ',  ' + currentDayFood.ccal + ' ккал'} </li> }) }
						</ol>	
					</div>
					<div className="right">
						<div className="day-diagram BMR-diagram">Норма: {this.props.currentBMR} </div>
						<div className="day-diagram"> <span> Скушано за день: {this.SummOfCcal} </span> 
							<div className="current-ccal">   </div>
						</div>
						
					</div>	
				</div>
			</div>
			<RightColumnDaysList days={this.state.days} />

		</div>
		

			)
	}
}



