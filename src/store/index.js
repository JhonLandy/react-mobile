import {createStore, applyMiddleware, combineReducers} from "redux";
import Thunk from "redux-thunk";
import reducers from "./reducers/index";
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(Thunk))
);

export default store;