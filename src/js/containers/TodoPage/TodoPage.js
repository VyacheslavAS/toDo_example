import React, { Component, PropTypes } from 'react';
import TaskCreator from 'components/TaskCreator';
import TasksList from 'components/TasksList';
import { sortedTasksSelector } from 'selectors';
import { createTask, updateTask, deleteTask, setTasks, setTasksToStorage } from 'actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { localStorage } from 'utils';
import cx from './TodoPage.scss';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createTask, updateTask, deleteTask, setTasks, setTasksToStorage}, dispatch);
}

@connect(sortedTasksSelector, mapDispatchToProps)
export default class TodoPage extends Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        setTasksToStorage: PropTypes.func.isRequired,
        createTask: PropTypes.func.isRequired,
        updateTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired,
        setTasks: PropTypes.func.isRequired
    };

    componentWillMount() {
        const { setTasks, setTasksToStorage } = this.props;
        const jsonTasks = localStorage.getItem('tasks');

        if (jsonTasks && jsonTasks !== 'undefined') setTasks(JSON.parse(jsonTasks));

        window.addEventListener('beforeunload', setTasksToStorage, false);

        window.addEventListener('keydown', event => {
            if (event.keyCode === 116) {
                setTasksToStorage();
            }
        }, false);
    }

    render() {
        const { tasks, createTask, updateTask, deleteTask } = this.props;
        return (
            <div className={cx('box-col', 'todo-page')}>
                <header>
                    <h1>To do list</h1>
                </header>
                <main className="box-col">
                    <TaskCreator createTask={createTask} />
                    <TasksList updateTask={updateTask} deleteTask={deleteTask} tasks={tasks} />
                </main>
            </div>
        );
    }
}
