import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import thunk from "redux-thunk";
import {applyMiddleware, compose} from "redux";

const initialState = {
    items: [],
    addedItems:[],
    total: 0
};

const middleware = [thunk];

const store = createStore(
    cartReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

