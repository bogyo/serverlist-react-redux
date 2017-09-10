import React, { Component } from 'react';
import '../style/sliderinput.css';

export default class SliderInput extends Component {
	constructor(props){
		super(props);
		this.state = {
			realValue: '',
			hiddenValue: this.props.data.length
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.transformToVisibleValue = this.transformToVisibleValue.bind(this);
	}

	componentWillMount(){
		if ( this.props.data.length === 0){
			return;
		}

		const value = this.transformToVisibleValue(this.props.data.length - 1);
		this.setState({ realValue: value });
	}

	handleInputChange(e){
		const value = e.target.value;
		console.log(e.target.value,'e.target.value');

		const visibleValue = this.transformToVisibleValue(value);

			console.log(visibleValue, 'visibleValue');


		this.setState({ realValue: visibleValue, hiddenValue: value },
			() => { this.props.handleInputChange(visibleValue); });
 	 }

 	transformToVisibleValue(value){
		const visibleValue = this.props.data[value];

	//	console.log('visibleValue',  this.props.data[value - 1]);
	//console.log('STORAGE ITEMS', this.props.data, this.props.data.length, this.props.data[index], index)
 //	return this.props.data[index];
		return visibleValue;
	}

	render(){
		// only random fallback for now
		const max = this.props.data ? this.props.data.length - 1 : 2;

		return (
			<div id="slider">
				<div className="sliderValues">
					<span className="min">
						minimum:
						<span className="value">
							0
						</span>
					</span>
					<span>maximum: <span className="value">
							{this.state.realValue}
						</span>
					</span>
				</div>
				<input
					type="range"
					value={this.state.hiddenValue}
					min="0"
					max={max}
					className="sliderInput"
					onInput={this.handleInputChange}
					onChange={this.handleInputChange} />
			</div>
		)
	}
}
