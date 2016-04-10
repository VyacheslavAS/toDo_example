import { omit } from 'lodash';
import {
    CREATE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SET_TASKS
} from 'constants';

const initialState = {
    tasksObject: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TASK:
    case UPDATE_TASK:
        return {
            ...state,
            tasksObject: Object.assign({}, state.tasksObject, {[payload.id]: payload})
        };

    case DELETE_TASK:
        return {
            ...state,
            tasksObject: omit(state.tasksObject, payload.id)
        };

    case SET_TASKS:
        return {
            ...state,
            tasksObject: payload
        };

    default:
        return state;
    }
}
