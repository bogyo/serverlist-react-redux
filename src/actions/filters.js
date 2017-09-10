import {
	APPLY_STORAGE_FILTER, APPLY_RAM_FILTER, APPLY_LOCATION_FILTER,
	APPLY_HARDDISK_FILTER, REMOVE_FILTERS } from './actionTypes.js';

export function applyStorageFilter(filterItem){
	return {
		type: APPLY_STORAGE_FILTER,
		payload: filterItem
	}
}

export function applyRamFilter(filterItem){
	return {
		type: APPLY_RAM_FILTER,
		payload: filterItem
	}
}

export function applyLocationFilter(filterItem){
	return {
		type: APPLY_LOCATION_FILTER,
		payload: filterItem
	}
}

export function applyHardDiskFilter(filterItem){
	return {
		type: APPLY_HARDDISK_FILTER,
		payload: filterItem
	}
}

export function removeFilters(){
	return {
		type: REMOVE_FILTERS
	}
}
