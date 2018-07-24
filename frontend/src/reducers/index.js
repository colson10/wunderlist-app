import { combineReducers } from 'redux';

import token from './token';
import userLists from './lists';


export default combineReducers({
  token, userLists,
});
