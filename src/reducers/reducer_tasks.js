import {ADD_TASK, CHANGE_STATUS} from '../actions';

export default function(state = [], action){
  switch (action.type) {
    case ADD_TASK:
      return [ ...state, action.payload];
    case CHANGE_STATUS:
      const newState = state.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });
      return newState;
    default:
      return state;
  }

}
