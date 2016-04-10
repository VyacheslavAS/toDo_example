import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import InputField from '../InputField';
import TextareaField from '../TextareaField';
import cx from './TaskCreator.scss';

export default class TaskCreator extends Component {
    static propTypes = {
        createTask: PropTypes.func
    }

    render() {
        return (
            <div className={cx('box-col', 'task-creator')}>
                <h3>Create a new task here:</h3>
                <div className="box-col">
                    <InputField
                        ref="title"
                        placeholder="Title"
                        className={cx('field')}
                        style={{fontSize: '16px', fontWeight: 600}}
                    />
                    <TextareaField ref="description" placeholder="Description" className={cx('field')} />
                    <button className={cx('create-btn')} onClick={::this.handleCreatingTask}>Create</button>
                </div>
            </div>
        );
    }

    handleCreatingTask() {
        const { title, description } = this.refs;

        if (title.value.trim()) {
            this.props.createTask({
                id: moment().valueOf(),
                title: title.value,
                description: description.value,
                finished: false
            });

            title.value = '';
            description.value = '';
        }
    }
}
