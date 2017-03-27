import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import routesPermissions from './routesPermissionsReducer';
import auth from './authReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  routesPermissions,
  user,
  auth,
  ajaxCallsInProgress,
});

export default rootReducer;
