
export const ADD_TASK = "add_task";
export const CHANGE_STATUS = "change_status";
export const FETCH_ACTIVE_TASKS = "fetch_active_tasks";
export const FETCH_COMPLETED_TASKS = "fetch_completed_tasks";
export const FETCH_ALL_TASKS = "fetch_all_tasks";
import _ from 'lodash';
let newID = 0;
export function addTask(title, activeFilter){
  const task = {id: newID, title, isActive: true};
  newID++;
  return{
    type: ADD_TASK,
    payload: task,
    activeFilter
  };

}
export function switchStatus(task, activeFilter){
  task.isActive = !task.isActive;
  return({
    type: CHANGE_STATUS,
    payload: task,
    activeFilter
  });
}
export function fetchActiveTasks(tasks){
  const activeTasks = _.filter(tasks, (task) => {
    return task.isActive;
  });
  return{
    type: FETCH_ACTIVE_TASKS,
    payload: activeTasks
  }
}
export function fetchCompletedTasks(tasks){
  const completedTasks = _.filter(tasks, (task) => {
    return !task.isActive;
  });
  return{
    type: FETCH_COMPLETED_TASKS,
    payload: completedTasks
  }
}
export function fetchAllTasks(tasks){
  return{
    type: FETCH_ALL_TASKS,
    payload: tasks
  }
}
