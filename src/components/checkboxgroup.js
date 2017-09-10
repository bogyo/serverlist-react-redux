import React, { Component } from 'react';
import '../style/checkboxgroup.css';

export default class CheckBoxGroup extends Component {
	constructor(props){
		super();
		this.state = {
			status: false
		}
		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
	}

	handleCheckBoxChange(){
		const status = !this.state.status;

		this.setState({ status },
			() => { this.props.handleCheckBoxChange(
				{ name : this.props.data.name, status: status })
		});
	}

	render(){
		const { data } = this.props;

		return (
			<div className="checkboxGroup">
				<label htmlFor="{data.name}" className="checkBoxLabel">
					{data.name}
				</label>
				<input
					type="checkbox"
					name={data.name}
					checked={this.state.status}
					onChange={this.handleCheckBoxChange} />
			</div>
		)
	}
}
