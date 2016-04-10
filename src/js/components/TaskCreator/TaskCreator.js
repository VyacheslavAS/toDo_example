import React, { Component } from 'react';
import InputField from '../InputField';
import TextareaField from '../TextareaField';
import cx from './TaskCreator.scss';

export default class TaskCreator extends Component {

    render() {
        return (
            <div className={cx('box-col', 'task-creator')}>
                <h3>Create a new task here:</h3>
                <div className="box-col">
                    <InputField ref="title" placeholder="Title" />
                    <TextareaField ref="description" placeholder="Description" />
                    <button className={cx('create-btn')} onClick={::this.handleCreatingTask}>Create</button>
                </div>
            </div>
        );
    }

    handleCreatingTask() {
    }
}
