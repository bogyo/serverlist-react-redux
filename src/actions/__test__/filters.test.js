import * as actions from '../filters.js';

import { APPLY_STORAGE_FILTER, APPLY_RAM_FILTER } from '../actionTypes.js';

describe('filter actions', () => {
  it('should create an action apply Storage Filter', () => {
    const filter = '250GB';

    const expectedAction = {
      type: 'APPLY_STORAGE_FILTER',
      payload: filter
    }
    expect(actions.applyStorageFilter(filter)).toEqual(expectedAction);
  });

	it('should create an action to apply Ram Filter', () => {
    const filter = [{'name': '2GB'}, {'name': '4GB'}]

    const expectedAction = {
      type: 'APPLY_RAM_FILTER',
      payload: filter
    }
    expect(actions.applyRamFilter(filter)).toEqual(expectedAction);
  });
});
