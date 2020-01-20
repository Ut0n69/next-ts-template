import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import todo from './todo';
import friend from './friend';

const reducers = combineReducers({ todo, friend });

export const Store = createStore(reducers, composeWithDevTools());

export type State = ReturnType<typeof Store.getState>;
