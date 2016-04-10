import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import TodoPage from './TodoPage';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <TodoPage />
                    {this.renderDevTools()}
                </div>
            </Provider>
        );
    }

    renderDevTools() {
        if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('./DevTools');
            return (
                <DevTools />
            );
        }
    }
}
