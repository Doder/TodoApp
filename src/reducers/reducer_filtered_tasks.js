import {FETCH_ACTIVE_TASKS, FETCH_COMPLETED_TASKS, FETCH_ALL_TASKS, ADD_TASK} from '../actions';
import _ from 'lodash';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_ACTIVE_TASKS:
      return action.payload;
    case FETCH_COMPLETED_TASKS:
      return action.payload;
    case FETCH_ALL_TASKS:
      return action.payload;
    case ADD_TASK:
      if(state.length === 0) return [ ...state, action.payload];
      return state[0].isActive ? [ ...state, action.payload]: state;
    default:
      return state;
  }

}
