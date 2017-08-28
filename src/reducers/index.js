import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import TasksReducer from './reducer_tasks';
import FilteredTasksReducer from './reducer_filtered_tasks';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  filteredTasks: FilteredTasksReducer,
  form: formReducer
});

export default rootReducer;
