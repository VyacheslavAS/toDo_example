import reducer from 'reducers';
import combineActions from 'redux-combine-actions';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

let finalCreateStore;

if (process.env.NODE_ENV !== 'production') {
    finalCreateStore = compose(
        applyMiddleware(combineActions, createLogger({collapsed: true})),
        require('containers/DevTools').instrument(),
        require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
} else {
    finalCreateStore = compose(
        applyMiddleware(combineActions),
    )(createStore);
}

const store = finalCreateStore(reducer, {});

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers/index');
        store.replaceReducer(nextRootReducer);
    });
}

if (process.env.NODE_ENV !== 'production') {
    const actions = require('actions');
    const { bindActionCreators } = require('redux');

    window.actions = bindActionCreators(actions, store.dispatch);
}

export default store;
