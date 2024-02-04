import { combineReducers } from 'redux';

// Components
import { clientsByIdSlice } from '../store/client/clientByIdSlice';
import { clientsListSlice } from '../store/client/clientListSlice';
import APIKeyReducer from './apiKey/reducer';
import LayoutReducer from './layouts/reducer';

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  APIKey: APIKeyReducer,
  clients: clientsListSlice.reducer,
  clientsById: clientsByIdSlice.reducer,
});

export { rootReducer };
