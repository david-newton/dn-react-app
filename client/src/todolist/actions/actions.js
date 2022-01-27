export const CREATE_TASK = 'CREATE_TASK';
export const createTask = data => ({
    type: CREATE_TASK,
    payload: { data }
});

export const REMOVE_TASK = 'REMOVE_TASK';
export const removeTask = data => ({
    type: REMOVE_TASK,
    payload: { data }
});

export const COMPLETE_TASK = 'COMPLETE_TASK';
export const completeTask = data => ({
    type: COMPLETE_TASK,
    payload: { data }
});

export const COMPLETE_ALL = 'COMPLETE_ALL';
export const completeAll = data => ({
    type: COMPLETE_ALL,
    payload: {}
});

//New Thunk Actions
export const LOAD_TASKS_START = 'LOAD_TASKS_START';
export const loadTasksStart = () => ({
    type: LOAD_TASKS_START
});

export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const loadTasksSuccess = data => ({
    type: LOAD_TASKS_SUCCESS,
    payload: { data }
});

export const LOAD_TASKS_FAIL = 'LOAD_TASKS_FAIL';
export const loadTasksFail = () => ({
    type: LOAD_TASKS_FAIL
});

