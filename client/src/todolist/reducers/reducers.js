import { 
    COMPLETE_ALL, 
    COMPLETE_TASK, 
    CREATE_TASK, 
    REMOVE_TASK,
    LOAD_TASKS_START,
    LOAD_TASKS_SUCCESS,
    LOAD_TASKS_FAIL
} from "../actions/actions";

export const isLoading = (state = false, action) => {
    const { type } = action;
    switch (type) {
        case LOAD_TASKS_START: 
            return true;       
        case LOAD_TASKS_SUCCESS:
        case LOAD_TASKS_FAIL:
            return false;
        default:
            return state;
    }
}

export const todolist = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TASK: {
            const { data } = payload;
            //Ignore empty string entries
            if(!data) {
                return state;
            }
            const newItem = {
                data,
                isComplete: false
            };
            //TODO -- would possibly make more sense to put this at the front of the list
            return state.concat(newItem);
        }
        case REMOVE_TASK: {
            const { data } = payload;
            const filteredState = state.filter(item => item.data !== data);

            return filteredState;
        }
        case COMPLETE_TASK: {
            const { data } = payload;
            return state.map(item => {
                if (item.data === data) {
                    return {...item, isComplete: true};
                }
                return item;
            });
        }
        case COMPLETE_ALL: {
            return state.map(item => {
                if (!item.isComplete) {
                    return {...item, isComplete: true}
                }
                return item;
            })
        }
        case LOAD_TASKS_SUCCESS: {
            const { todolist } = payload;
            return todolist;
        }
        case LOAD_TASKS_START:
        case LOAD_TASKS_FAIL:
        default:
            return state;
    }
}