import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storage, rams, hardDisk} from '../constants.js';

import { applyRamFilter, applyLocationFilter,
	applyHardDiskFilter, applyStorageFilter, removeFilters } from '../actions/filters.js';
import {createDropDownValues} from '../utils/utils.js';

import SliderInput from './sliderinput.js';
import CheckBoxGroup from './checkboxgroup.js';
import SearchInput from './searchinput.js';

import '../style/filters.css';

// using Lodash using _bindAll can be an option to make bindig shorter.
class Filters extends Component {
	constructor(props){
		super();
		this.state = {
			applied: false
		}
		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
		this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
		this.handleHardDiskInputChange = this.handleHardDiskInputChange.bind(this);
		this.handleStorageInputChange = this.handleStorageInputChange.bind(this);
		this.removeFilters = this.removeFilters.bind(this);
	}

	handleStorageInputChange(filterItem){
		this.setState({ applied: true });
		this.props.applyStorageFilter(filterItem);
	}

	handleCheckBoxChange(filterItem){
		this.setState({ applied: true });
		this.props.applyRamFilter(filterItem);
	}

	handleLocationInputChange(filterItem){
		this.setState({ applied: true });
		this.props.applyLocationFilter(filterItem);
	}

	handleHardDiskInputChange(filterItem){
		this.setState({ applied: true });
		this.props.applyHardDiskFilter(filterItem);
	}

	renderStorageFilter(){
		return <SliderInput data={storage} handleInputChange={this.handleStorageInputChange} />
	}

	renderRamFilter(){
		return rams.map( (ram, index) => {
			return <CheckBoxGroup key={index} data={ram} handleCheckBoxChange={this.handleCheckBoxChange} />
		})
	}

	removeFilters(){
		this.setState({ applied: false });
		this.props.removeFilters();
	}

	renderLocationFilter(){
		const searchLocation = createDropDownValues(this.props.servers.items);
		return <SearchInput data={searchLocation} handleInputChange={this.handleLocationInputChange} />
	}

	renderDiskFilter(){
		return <SearchInput data={hardDisk} handleInputChange={this.handleHardDiskInputChange} />
	}

	render(){
		return(
			<div className="filters">
				<div className="filter">
					<p className="title">Storage</p>
						{this.renderStorageFilter()}
				</div>
				<div className="filter">
					<p className="title">Ram</p>
					{this.renderRamFilter()}
				</div>
				<div className="filter">
					<p className="title">Harddisk type</p>
					{this.renderLocationFilter()}
				</div>
				<div className="filter">
					<p className="title">Location</p>
					{this.renderDiskFilter()}
				</div>
				{this.state.applied && <div className="removeFilters">
					<button onClick={this.removeFilters}>REMOVE FILTERS</button>
				</div>}
				{!this.state.applied && <div className="removeFilters text">
					<span>use the filters to narrow your server list</span>
				</div>}
		</div>
	)};
}

const mapStateToProps = ( state ) => {
	return state;
}

const mapDispatchToProps = dispatch => {
  return {
    applyRamFilter: (filterItem) => {
      dispatch(applyRamFilter(filterItem));
    },
		applyLocationFilter:(filterItem) => {
			dispatch(applyLocationFilter(filterItem));
		},
		applyHardDiskFilter:(filterItem) => {
			dispatch(applyHardDiskFilter(filterItem));
		},
		applyStorageFilter:(filterItem) => {
			dispatch(applyStorageFilter(filterItem));
		},
		removeFilters:() => {
			dispatch(removeFilters());
		}
	}
};

const VisibleFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default VisibleFilters;
