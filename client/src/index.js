import React from "react";
import ReactDOM from "react-dom";

import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'

import "./index.css";
import App from "./App";
import reducer from './reducers/index'

const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 

    rootElement
);

//Task List:
//x1. Add in all necessary components and libary methods.
//x2. Create a store that includes thunk middleware support.
//x3. Wrap the App component in a react-redux Provider element.