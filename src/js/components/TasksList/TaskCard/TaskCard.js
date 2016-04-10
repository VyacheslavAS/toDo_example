import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import InputField from 'components/InputField';
import TextareaField from 'components/TextareaField';
import cx from './TaskCard.scss';

export default class TaskCard extends Component {
    static propTypes = {
        task: PropTypes.object.isRequired,
        updateTask: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired
    }

    state = {
        isEditing: false
    }

    render() {
        const { task: { title, description, id, finished }, deleteTask } = this.props;
        const { isEditing } = this.state;
        return (
            <div className={cx('box-row nowrap', 'task-card')}>
                <div className={cx('box-row', 'check-box')} onClick={::this.handleFinishTask}>
                    {finished && <span className={cx('checked')}>+</span>}
                </div>
                <div className={cx('box-col', 'card-body')}>
                    <span className={cx('delete')} onClick={() => deleteTask(id)}>x</span>
                    { finished &&
                        <div className={cx('box-col', 'finished')}>
                            <span className={cx('finished-text')}>D&nbsp;&nbsp;o&nbsp;&nbsp;n&nbsp;&nbsp;e</span>
                        </div>
                    }
                    <InputField
                        ref="title"
                        value={title}
                        readOnly={!isEditing}
                        className={cx('title')}
                        style={{fontSize: '16px', fontWeight: 600}}
                     />
                    <TextareaField
                        ref="description"
                        value={description}
                        readOnly={!isEditing}
                        className={cx('description')}
                    />
                    <div className={cx('box-row nowrap', 'bottom-line')}>
                        <span className={cx('date')}>Created: {moment(id).format('llll')}</span>
                        { !isEditing ?
                            <button className={cx('action-btn')} onClick={::this.toggleEditing}>Edit</button> :
                            <div className={cx('box-row nowrap', 'btns-block')}>
                                <button className={cx('action-btn')} onClick={::this.toggleEditing}>Cancel</button>
                                <button className={cx('action-btn')} onClick={::this.handleSaveChanges}>Save</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }

    toggleEditing() {
        this.setState({isEditing: !this.state.isEditing});
    }

    handleCancelChanges() {
        const { task } = this.props;
        const { title, description } = this.refs;
        title.value = task.title;
        description.value = task.description;
        this.toggleEditing();
    }

    handleSaveChanges() {
        const { updateTask, task } = this.props;
        const { title, description } = this.refs;
        if (title.value.trim()) {
            updateTask({
                id: task.id,
                title: title.value,
                description: description.value,
                finished: false
            });
        } else {
            title.value = task.title;
            description.value = task.description;
        }

        this.toggleEditing();
    }

    handleFinishTask() {
        const { updateTask, task } = this.props;
        updateTask({
            ...task,
            finished: !task.finished
        });
    }
}
