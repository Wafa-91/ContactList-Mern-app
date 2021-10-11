import {createStore, applyMiddleware, compose} from "redux";

// import combine reducers
import {CombineReducer} from "../Reducers";

import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    CombineReducer,
    composeEnhancer(applyMiddleware(thunk))
    );