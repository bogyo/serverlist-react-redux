import {
	APPLY_STORAGE_FILTER, APPLY_RAM_FILTER, APPLY_LOCATION_FILTER,
	APPLY_HARDDISK_FILTER, REMOVE_FILTERS } from '../actions/actionTypes.js';

const initialState = {
	ram: { type: 'IDLE', items: [] },
	location: { type: 'IDLE', items: [] },
	hardDisk: { type: 'IDLE', items: [] },
	storage: { type: 'IDLE', items: [] }
};

const filters = (state = initialState, action) => {
	switch(action.type) {
		case APPLY_RAM_FILTER:
			if (action.payload.status === true){
				const newItems = [
					...state.ram.items,
					action.payload.name
				]
			return {
				...state,
				ram: {
					type: action.type,
					items: newItems
				}
			}
		} else {
	 const newItems = state.ram.items.filter( item => item !== action.payload.name);
		return {
			...state,
			ram: {
				type: action.type,
				items: newItems
			}
		}
	}
	case APPLY_LOCATION_FILTER:
		return {
			...state,
			location: {
				type: action.type,
				items: action.payload
			}
		}
	case APPLY_HARDDISK_FILTER:
		return {
			...state,
			hardDisk: {
				type: action.type,
				items: action.payload
			}
	}
	case APPLY_STORAGE_FILTER:
		let data = parseInt(action.payload, 10);

		if (action.payload.includes('TB')){
			data = data * 1024;
		}
		return {
			...state,
			storage: {
				type: action.type,
				items: data
			}
	}
	case REMOVE_FILTERS:
		return {
			 ...initialState
		}
	  	default:
				return state;
		}
 }

export default filters;
