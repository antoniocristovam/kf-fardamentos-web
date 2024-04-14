import { combineReducers } from 'redux';

// Components
import { clientsByIdSlice } from '../store/client/clientByIdSlice';
import { clientsListSlice } from '../store/client/clientListSlice';
import { employeeByIdSlice } from '../store/employee/employeeByIdSlice';
import { clientsEmployeeSlice } from '../store/employee/employeeListSlice';
import LayoutReducer from './layouts/reducer';

const rootReducer = combineReducers({
  Layout: LayoutReducer,

  //List
  clients: clientsListSlice.reducer,
  employees: clientsEmployeeSlice.reducer,

  //ById
  clientsById: clientsByIdSlice.reducer,
  employeeById: employeeByIdSlice.reducer,
});

export { rootReducer };
