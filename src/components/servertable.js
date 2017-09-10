import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServers } from '../actions';
import {
	APPLY_STORAGE_FILTER, APPLY_RAM_FILTER, APPLY_LOCATION_FILTER,
	APPLY_HARDDISK_FILTER } from '../actions/actionTypes.js';

import '../style/servertable.css';

class ServerTable extends Component {
// not a real table to stay responsive
constructor(props){
  super();
	this.checkFilter = this.checkFilter.bind(this);
}

componentDidMount(){
  this.props.fetchServers();
}

ramFiltered(servers, filters){
	return servers.filter(server => {
			for (let i = 0; i < filters.ram.items.length; i++) {
				if (server.ram.startsWith(filters.ram.items[i])) {
					return true;
				}
			}
			return false;
		});
}

locationFiltered(servers, filters){
	return servers.filter(server => {
		for(let i = 0; i < filters.location.items.length; i++) {
			if( server.location.includes(filters.location.items[i])){
				return true;
			}
		}
		return false;
	})
}

hardDiskFiltered(servers, filters){
	return servers.filter(server => {
		for(let i = 0; i < filters.hardDisk.items.length; i++) {
			if( server.hdd.includes(filters.hardDisk.items[i])){
				return true;
			}
		}
		return false;
	})
}

storageFiltered(servers, filters){
	// in a real and bigger application would be useful
	return servers.filter( server => {
		const hdd = server.hdd;
		const  gb = hdd.indexOf('GB');
		const tb = hdd.indexOf('TB');
		const multiple = hdd.indexOf('x');

		let sizeString, sizeMulti, sizeGB;

		const subHdd = gb > -1 ?
			hdd.substr(0, gb + 2) :  hdd.substr(0, tb + 2);

			if (subHdd.includes('TB')){
				 sizeString = hdd.substr(0, tb);
				 sizeGB =  parseInt(sizeString.substr(multiple + 1, tb), 10) * 1024;
			}
			else {
				 sizeString = hdd.substr(0, gb);
				 sizeGB =  sizeString.substr(multiple + 1, gb);
			}
			sizeMulti = sizeString.substr(0, multiple);
			const size = sizeMulti * sizeGB;

			if (size < filters.storage.items) {
				return server;
			}
			return false;
	});
}

checkFilter(){
	const filters = this.props.filters;
	const servers = this.props.servers.items;
	let filteredServers = servers;

	if( filters.ram.type === APPLY_RAM_FILTER) {
		 filteredServers = this.ramFiltered(filteredServers, filters);
	}

	if( filters.location.type === APPLY_LOCATION_FILTER){
		filteredServers = this.locationFiltered(filteredServers, filters);
	}

	if( filters.hardDisk.type === APPLY_HARDDISK_FILTER){
		filteredServers = this.hardDiskFiltered(filteredServers, filters);
	}

	if(filters.storage.type === APPLY_STORAGE_FILTER){
		filteredServers = this.storageFiltered(filteredServers, filters);
	}

	return filteredServers;
}

renderTable(servers){
	const filteredServers = this.checkFilter();

	return filteredServers.map( (server, index) => {
		return <tr key={index}>
			<td className="number"><span>{index}</span></td>
			<td data-th="modell"><span>{server.model}</span></td>
			<td data-th="ram"><span>{server.ram}</span></td>
			<td data-th="Hdd"><span>{server.hdd}</span></td>
			<td data-th="Location"><span>{server.location}</span></td>
			<td data-th="Price"><span>{server.price}</span></td>
		</tr>
	})
}

render() {
    const { servers } = this.props;

    return (
			<div>
				{servers.items.length === 0 && <h2>Empty.</h2>}
				{servers.items.length !== 0 &&
	      <table>
	        <thead className='table-header'>
	          <tr>
							<th className="number">No.</th>
							<th>Modell</th>
		          <th>Ram</th>
		          <th>HDD</th>
						 	<th>Location</th>
							<th>Price</th>
						</tr>
	        </thead>
	        <tbody>
						 {servers.items.length > 0 && this.renderTable(servers.items)}
	        </tbody>
	      </table>
			}
			</div>
    );
	}
}

const mapStateToProps = state => {
	const { servers, filters } = state;

  return { servers, filters };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => {
      dispatch(fetchServers());
    }
  }
}

const VisibleServerTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerTable);

export default VisibleServerTable;
