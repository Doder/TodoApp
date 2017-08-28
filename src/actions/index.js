
export const ADD_TASK = "add_task";
export const CHANGE_STATUS = "change_status";
let newID = 0;
export function addTask(title){
  const task = {id: newID, title, isActive: true};
  newID++;
  return({
    type: ADD_TASK,
    payload: task
  });
}
export function switchStatus(task){
  task.isActive = !task.isActive;
  return({
    type: CHANGE_STATUS,
    payload: task
  });
}
