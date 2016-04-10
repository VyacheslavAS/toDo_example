import store from '../store';
import { tasksSelector } from 'selectors';
import { localStorage } from 'utils';
import {
    CREATE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SET_TASKS,
    SET_TASKS_TO_STORAGE
} from 'constants';

export function createTask(data) {
    return {
        type: CREATE_TASK,
        payload: data
    };
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: {id: id}
    };
}

export function updateTask(data) {
    return {
        type: UPDATE_TASK,
        payload: data
    };
}

export function setTasks(data) {
    return {
        type: SET_TASKS,
        payload: data
    };
}

export function setTasksToStorage() {
    const { getState } = store;
    const tasksObject = tasksSelector(getState());
    localStorage.setItem('tasks', JSON.stringify(tasksObject));
    return {
        type: SET_TASKS_TO_STORAGE
    };
}
