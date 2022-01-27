import { loadTasksStart, loadTasksSuccess, loadTasksFail } from "../actions/actions";


export const displayAlert = text => () => {
    alert(text);
};

export const loadTodoList = () => async (dispatch, getState) => {
    try {
        dispatch(loadTasksStart());
        const response = await fetch('http://localhost:8080/todos');
        const taskList = await response.json();
    
        dispatch(loadTasksSuccess(taskList));

    } catch (e) {
        dispatch(loadTasksFail());
        dispatch(displayAlert(e));
    }
}