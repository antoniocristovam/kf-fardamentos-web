import { combineReducers } from 'redux';

// Components
import APIKeyReducer from './apiKey/reducer';
import LayoutReducer from './layouts/reducer';
import { clientsSlice } from '../store/client/clientSlice';

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  APIKey: APIKeyReducer,
  clients: clientsSlice.reducer,
});

export { rootReducer };
