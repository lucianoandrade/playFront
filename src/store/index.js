import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import user from './reducers/user.reducer';
import thunk from 'redux-thunk';

const combine = combineReducers({
    user: user
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combine, composeEnhancers(applyMiddleware(thunk)))

export default store;