
import React from 'react';
import {shallow} from 'enzyme';
import SliderInput from '../sliderinput.js';

const mockData = ['0', '250GB', '500GB', '1TB'];

describe('SliderInput', () => {

	it('it should render a rangeInput', () => {

	  const component = shallow(
	    <SliderInput data={mockData} />
	  );

		expect(component.state('hiddenValue')).toEqual(4);
		expect(component.state('realValue')).toEqual('1TB');
  });

	it('it should change the state of rangeInput and call the passed fn', () => {
		const mockFunction = jest.fn();
		const component = shallow(
	    <SliderInput data={mockData} handleInputChange={mockFunction} />
	  );

		component.find('input').simulate('input', { target: { value: 1 }} );

		expect(component.state('hiddenValue')).toEqual(1);
		expect(component.state('realValue')).toEqual('250GB');
		expect(mockFunction).toBeCalled();
	});
});
