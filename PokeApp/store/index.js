import { createStore, applyMiddleware } from 'redux';
import index from '../reducers';
import thunk from 'redux-thunk';

export const store = createStore(index, applyMiddleware(thunk));
