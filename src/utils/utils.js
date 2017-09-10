export const createDropDownValues = (items) => {
	let locationFilterItems = [];

	for( let i = 0; i < items.length; i++){
		if(locationFilterItems.includes(items[i].location) === false){
			locationFilterItems = locationFilterItems.concat(items[i].location);
		}
	}
	return locationFilterItems;
}
