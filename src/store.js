import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};
const middleWare = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
