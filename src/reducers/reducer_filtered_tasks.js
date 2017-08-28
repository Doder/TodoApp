import {FETCH_ACTIVE_TASKS, FETCH_COMPLETED_TASKS, FETCH_ALL_TASKS, ADD_TASK, CHANGE_STATUS} from '../actions';
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
      return action.activeFilter !== "COMPLETED" ? [ ...state, action.payload]: state;
    case CHANGE_STATUS:
      if(action.activeFilter !== "ALL"){
        const newState = _.reject(state, (task)=> {
          return task.id === action.payload.id;
        });
        return newState;
      }
      return state;
    default:
      return state;
  }

}
