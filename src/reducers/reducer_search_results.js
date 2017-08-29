import {DO_A_SEARCH} from '../actions';
import _ from 'lodash';

export default function(state = null, action){
  switch (action.type) {
    case DO_A_SEARCH:
      const term = action.payload.term.toLowerCase();
      if(term === "" || term.length < 2) return null;
      return _.filter(action.payload.tasks, (currentTask) => {
        const title = currentTask.title.toLowerCase();
        return title.startsWith(term);
      });
    default:
      return state;
  }

}
