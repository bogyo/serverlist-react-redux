import * as utils from '../utils.js';

describe('Utils', () => {
  it('should  create an Array to with checkbox values', () => {
    const location = [{location: 'Amsterdam'}, {location: 'Singapure'}];
    const expectedValues = ['Amsterdam', 'Singapure'];

    expect(utils.createDropDownValues(location)).toEqual(expectedValues);
  });

});
