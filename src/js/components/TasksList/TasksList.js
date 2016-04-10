import React, { Component } from 'react';
import cx from './TasksList.scss';

export default class TasksList extends Component {
    render() {
        return (
            <div className={cx('box-col')}>
                <h3>Your current tasks:</h3>
            </div>
        );
    }
}
