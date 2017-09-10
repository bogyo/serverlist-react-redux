import { REQUEST_SERVERS, RECEIVE_SERVERS } from '../actions/actionTypes.js';

function servers( state = { isFetching: false, items: []}, action){
	switch (action.type) {
		case REQUEST_SERVERS:
    return {
			...state,
		  isFetching: true
		}
    case RECEIVE_SERVERS:
    return {
			...state,
			isFetching: false,
      items: action.payload,
		}
		default:
			return state
	}
}

export default servers;
