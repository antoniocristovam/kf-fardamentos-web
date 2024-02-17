import { combineReducers } from 'redux';

// Components
import { clientsByIdSlice } from '../store/client/clientByIdSlice';
import { clientsListSlice } from '../store/client/clientListSlice';
import { employeeByIdSlice } from '../store/employee/employeeByIdSlice';
import { clientsEmployeeSlice } from '../store/employee/employeeListSlice';
import APIKeyReducer from './apiKey/reducer';
import LayoutReducer from './layouts/reducer';

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  APIKey: APIKeyReducer,

  //List
  clients: clientsListSlice.reducer,
  employees: clientsEmployeeSlice.reducer,

  //ById
  clientsById: clientsByIdSlice.reducer,
  employeeById: employeeByIdSlice.reducer,
});

export { rootReducer };
