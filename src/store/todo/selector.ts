import { createSelector } from 'reselect';
import { State } from '../index';

import { Todo } from './index';

export const GetAllTodos = createSelector(
  (state: State) => state.todo,
  (todos: Todo[]) => todos
);
