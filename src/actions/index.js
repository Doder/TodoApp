
export const ADD_TASK = "add_task";
let newID = 0;
export function addTask(title){
  const task = {id: newID, title};
  newID++;
  return({
    type: ADD_TASK,
    payload: task
  });
}
