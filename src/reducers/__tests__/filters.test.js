import reducer from '../../reducers/filters';
import * as types from '../../actions/ActionTypes';

const initialState = {
	ram: { type: 'IDLE', items: [] },
	location: { type: 'IDLE', items: [] },
	hardDisk: { type: 'IDLE', items: [] },
	storage: { type: 'IDLE', items: [] }
};

describe('filters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
