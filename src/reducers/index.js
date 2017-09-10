import { combineReducers } from 'redux';
import servers from './servers';
import filters from './filters';

const reducer = combineReducers({
  servers: servers,
  filters: filters
});

export default reducer;
