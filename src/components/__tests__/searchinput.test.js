import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchInput from '../searchinput';

const mockData = ['SAS', 'SATA', 'SSD'];


describe('SearchInput', () => {
	it('should render with the given options', () => {
		const component = shallow(<SearchInput data={['SAS', 'SATA', 'SSD']} />);


		expect(component.state('searchText')).toEqual('');
	  expect(component.find('option').length).toBe(3);
		expect(component.find('option').at(0).text()).toBe('SAS');
		expect(component.find('option').at(2).text()).toBe('SSD');
	});

	it('should change value and call the passed function', () => {
		const mockFunction = jest.fn();

		const component = shallow(<SearchInput data={['SAS', 'SATA', 'SSD']}
		handleInputChange={mockFunction} />);

		component.find('select').simulate('change', {target: {options: 'SATA' }});

		expect(mockFunction).toBeCalled();
	});
});
