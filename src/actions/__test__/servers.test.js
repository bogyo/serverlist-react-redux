import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../index.js';

import { REQUEST_SERVERS, RECEIVE_SERVERS } from '../actionTypes.js';
import {response} from './response.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('server actions', () => {
	it('creates RECEIVE_SERVERS when fetching servers has been done', () => {
		const expectedActions = [
			{ type: REQUEST_SERVERS },
			{ type: RECEIVE_SERVERS, payload: undefined }];

		const store = mockStore({ servers: [] })

		return store.dispatch(actions.fetchServers()).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions);
		});
	})
});
