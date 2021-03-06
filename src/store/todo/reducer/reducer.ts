import { Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import { produce } from 'immer';

import { Todo } from '../index';
import { Add } from '../action/action';

const initialState: Todo[] = [
  {
    title: 'Learn Vue.js'
  }
];

export const reducer: Reducer<Todo[]> = (state = initialState, action) => {
  if (isType(action, Add)) {
    return produce(state, draft => {
      draft.push({ title: action.payload.title });
    });
  }

  return state;
};

export default reducer;
