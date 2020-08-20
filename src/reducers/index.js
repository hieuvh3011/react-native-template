import {combineReducers} from 'redux';
import commonReducer from './CommonReducer';
import authReducer from './AuthReducer'; 

const appReducer = combineReducers({commonReducer});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
