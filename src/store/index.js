import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import appReducers from './reducers/index';

const ReduxStore = () => {
    const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        appReducers,
        composeEnhacers(applyMiddleware(promiseMiddleware))
    )
    return store;
}

export default ReduxStore;