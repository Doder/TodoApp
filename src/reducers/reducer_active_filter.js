import {FETCH_ACTIVE_TASKS, FETCH_COMPLETED_TASKS, FETCH_ALL_TASKS} from '../actions';
import _ from 'lodash';

export default function(state = "ALL", action){
  switch (action.type) {
    case FETCH_ACTIVE_TASKS:
      return "ACTIVE";
    case FETCH_COMPLETED_TASKS:
      return "COMPLETED";
    case FETCH_ALL_TASKS:
      return "ALL";
    default:
      return state;
  }

}
