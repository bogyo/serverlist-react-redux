import React, { Component } from 'react';
import Filters from './filters.js';
import ServerTable from './servertable.js';

import '../style/style.css';

export default class App extends Component {
  render() {
    return (
      <div>
				<Filters />
				<div className="tableHolder">
        	<ServerTable />
				</div>
      </div>
    );
  }
};
