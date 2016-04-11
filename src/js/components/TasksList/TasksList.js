import React, { Component, PropTypes } from 'react';
import TaskCard from './TaskCard';
import cx from './TasksList.scss';

export default class TasksList extends Component {
    static propTypes = {
        tasks: PropTypes.array,
        updateTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired
    }

    static defaultProps = {
        tasks: []
    }

    render() {
        const { tasks, updateTask, deleteTask } = this.props;
        return (
            <section className={cx('box-col', 'tasks-list')}>
                <h2 className={cx('header')}>Your current tasks:</h2>
                { !tasks.length ?
                    <span className={cx('no-tasks')}>You don't have any tasks</span> :
                    tasks.map(task => {
                        return (
                            <TaskCard
                                key={task.id}
                                task={task}
                                updateTask={updateTask}
                                deleteTask={deleteTask}
                            />
                        );
                    })
                }
            </section>
        );
    }
}
