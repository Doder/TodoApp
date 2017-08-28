import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import TasksReducer from './reducer_tasks';
import FilteredTasksReducer from './reducer_filtered_tasks';
import ActiveFilterReducer from './reducer_active_filter';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  filteredTasks: FilteredTasksReducer,
  activeFilter: ActiveFilterReducer,
  form: formReducer
});

export default rootReducer;
