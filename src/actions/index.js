import {
	REQUEST_SERVERS,
	RECEIVE_SERVERS
} from './actionTypes.js';


export function fetchAllServerData(){
  return fetch('/list');
}

function requestServers() {
  return {
    type: REQUEST_SERVERS
  }
}

function receiveServers(json) {
  return {
    type: RECEIVE_SERVERS,
    payload: json
  }
}

export function fetchServers(){
	return function (dispatch) {
		 dispatch(requestServers());
		 return fetchAllServerData().then(
				response => response.json(),
				error => console.log('An error occured.', error)
		 )
		 .then(json => {
			 // update the app state with the results of the API call.
			 dispatch(receiveServers(json))
			 }
		 )
	}
}
