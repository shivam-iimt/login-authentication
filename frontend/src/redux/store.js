import {createStore, applyMiddleware, combineReducers} from 'redux';
import signinReducer from './reducer/signinReducer';
import cateReducer from './reducer/cateReducer';
import queReducer from './reducer/questionReducer';


const thunkMiddleware = require('redux-thunk').default;

const mainReducer=combineReducers(
    {
        signin:signinReducer,
        cate:cateReducer,
        questionReducer:queReducer
    }
);

const store = createStore(mainReducer,applyMiddleware(thunkMiddleware));

export default store;