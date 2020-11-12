// const { createStore } = require("redux");
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReduser from './profileReduser';
import dialogReduser from './dialogReduser';
import usersReduser from './usersReduser';
import authReduser from './authReduser';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReduser from './appReduser';

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser
})

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

export default store;
