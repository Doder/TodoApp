import {ADD_TASK} from '../actions';

let tasks = [{id: 1, title: "Learn React"},
{id: 2, title: "Learn Redux"}];

export default function(state = [], action){

    console.log(state);
  switch (action.type) {
    case ADD_TASK:
      return [ ...state, action.payload];
    default:
      return state;
  }

}
