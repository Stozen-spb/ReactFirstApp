import React from 'react';

export default class BMRcalculator extends React.Component {
	_calcBMR(event) {
		event.preventDefault();
		
		var activityCheckboxes = document.getElementsByName('activityLevel'), genderBMR;
		
		for (var i = 0; i < activityCheckboxes.length; i++) {
			if (activityCheckboxes[i].checked)
			var activityLevel =	activityCheckboxes[i].value; 

		}
		 if (this._genderM.checked)  genderBMR =  88.36 + (13.4 * this._mass.value) + (4.8 * this._height.value) - (5.7 * this._age.value);
		 else  genderBMR = 447.6 + (9.2 * this._mass.value) + (3.1 * this._height.value) - (4.3 * this._age.value);
		 var finalBMR = activityLevel * genderBMR;
		 
		 return  this.props.callbackFromParent( Math.round(finalBMR) );
	}

	render() {
		return ( 
			<div>
				<button type='button' className="calc-current-BMR">Рассчитать вашу норму</button>
				<div className="BMR-calculator-body">
					<form  name='BMR' className="BMR-calculator-form" onSubmit={ this._calcBMR.bind(this) }>
						<fieldset className="gender">
							<legend> Ваш пол</legend>
							<input type="radio" name='gender' id='gender1' ref={ input => this._genderM = input} defaultChecked/>
							<label className="radio" htmlFor="gender1">мужской</label>
							<input type="radio" name='gender' id='gender2' ref={ input => this._genderF = input}/>
							<label className="radio" htmlFor="gender2">женский</label> 
						</fieldset>
						<fieldset className="bio">
							<legend> БИО </legend>

							<label> <span>Возраст</span> <input type="text" name='age' defaultValue="25" ref={ input => this._age = input} /></label>

							<label> <span>Рост, см</span><input type="text" name='height' defaultValue="170" ref={ input => this._height = input} /></label>

							<label> <span>Вес, кг</span><input type="text" name='weight' defaultValue="69" ref={ input => this._mass = input} /></label>

						</fieldset>
						<fieldset className="activity-level">
							<legend>Ваш уровень активности</legend>
							<input type="radio" name='activityLevel' value="1.2" id='actlevel1'/>
							<label className="radio" htmlFor="actlevel1">минимальный</label>
							<input type="radio" name='activityLevel' value="1.375" id='actlevel2' defaultChecked/>
							<label className="radio" htmlFor="actlevel2">низкий</label>
							<input type="radio" name='activityLevel' value="1.55" id='actlevel3' />
							<label className="radio" htmlFor="actlevel3"  >средний</label>
							<input type="radio" name='activityLevel' value="1.725" id='actlevel4'/>
							<label className="radio" htmlFor="actlevel4">высокий</label>
							<input type="radio" name='activityLevel' value="1.9" id='actlevel5'/>
							<label className="radio" htmlFor="actlevel5">очень высокий</label>
						</fieldset> 
						<input className="calcBMRNow" type="submit" value="Рассчитать" name="calcBMR"/> 
						<span className="BMR-result">Ваша дневная норма: {this.props.currentBMR} </span>
					</form>



				</div>
			</div>

			)
	}
}


// this.props.callbackFromParent(5000);