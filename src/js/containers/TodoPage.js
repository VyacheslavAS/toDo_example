import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';

export default class TodoPage extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    hello!
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