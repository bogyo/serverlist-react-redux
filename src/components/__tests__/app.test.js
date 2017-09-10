import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';

import { shallow } from 'enzyme';


it('renders isolated component', () => {
  const app = shallow(<App />);
});

it('renders together with children', () => {
//  const div = document.createElement('div');
//  ReactDOM.render(<App />, div);
});
