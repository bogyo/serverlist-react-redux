import React, { Component } from 'react';
import '../style/searchinput.css';

export default class SearchInput extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchText: ''
		}

		this.handleDropDownChange = this.handleDropDownChange.bind(this);
		this.renderOptions = this.renderOptions.bind(this);
	}

		handleDropDownChange(e){
			const options = e.target.options;
	  		let searchText = []; //single '', multiple []

				// can use with multiple
				// multiple is not dropdown style
				// add multiple attrib to select tag

			  for (let i = 0; i < options.length; i++) {
			    if (options[i].selected) {
			      searchText.push(options[i].value);
			    }
			  }
			this.setState({ searchText }, () => { this.props.handleInputChange(searchText);});
	 	 }

	 renderOptions(){
		 	return (
				this.props.data.map((option, index) => {
				return <option
					key={index}
					value={option}
					className="searchOption">{option}</option>
			})
		)
	 }

	render(){
		return (
				<div className="searchInput">
						<select
							value={this.state.searchText}
							className="searchSelect"
        			onChange={this.handleDropDownChange}>
							{this.renderOptions()}
						</select>
				</div>
		)
	}
}
