import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import TasksReducer from './reducer_tasks';
import FilteredTasksReducer from './reducer_filtered_tasks';
import ActiveFilterReducer from './reducer_active_filter';
import SearchResultsReducer from './reducer_search_results';


const rootReducer = combineReducers({
  tasks: TasksReducer,
  filteredTasks: FilteredTasksReducer,
  activeFilter: ActiveFilterReducer,
  searchResults: SearchResultsReducer,
  form: formReducer
});

export default rootReducer;
