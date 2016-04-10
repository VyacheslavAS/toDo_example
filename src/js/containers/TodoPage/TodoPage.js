import React, { Component } from 'react';
import TaskCreator from 'components/TaskCreator';
import TasksList from 'components/TasksList';
import cx from './TodoPage.scss';

export default class TodoPage extends Component {
    render() {
        return (
            <div className={cx('box-col', 'todo-page')}>
                <h1>To do list</h1>
                <TaskCreator />
                <TasksList />
            </div>
        );
    }
}
