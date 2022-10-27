import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reootReducer from './reducers';

const initialState={};
const middleWare=[thunk];

const store= createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleWare),
    window.__RREDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

));
export default store;