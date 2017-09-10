import * as actions from '../filters.js';

import { APPLY_STORAGE_FILTER, APPLY_RAM_FILTER,
	APPLY_LOCATION_FILTER, APPLY_HARDDISK_FILTER, REMOVE_FILTERS }
 	from '../actionTypes.js';

describe('filter actions', () => {
  it('should create an action apply Storage Filter', () => {
    const filter = '250GB';

    const expectedAction = {
      type: APPLY_STORAGE_FILTER,
      payload: filter
    }
    expect(actions.applyStorageFilter(filter)).toEqual(expectedAction);
  });

	it('should create an action to apply Ram Filter', () => {
    const filter = [{'name': '2GB'}, {'name': '4GB'}]

    const expectedAction = {
      type: APPLY_RAM_FILTER,
      payload: filter
    }
    expect(actions.applyRamFilter(filter)).toEqual(expectedAction);
  });

	it('should create an action to apply Location Filter', () => {
    const filter = ['San FranciscoSFO-12']

    const expectedAction = {
      type: APPLY_LOCATION_FILTER,
      payload: filter
    }
    expect(actions.applyLocationFilter(filter)).toEqual(expectedAction);
  });

	it('should create an action to apply HardDisk Filter', () => {
    const filter = ['San FranciscoSFO-12']

    const expectedAction = {
      type: APPLY_HARDDISK_FILTER,
      payload: filter
    }
    expect(actions.applyHardDiskFilter(filter)).toEqual(expectedAction);
  });

	it('should create an action to remove Filters', () => {
    const filter = ['San FranciscoSFO-12']

    const expectedAction = {
      type: REMOVE_FILTERS
    }
    expect(actions.removeFilters(filter)).toEqual(expectedAction);
  });
});
