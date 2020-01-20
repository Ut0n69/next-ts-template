import { Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import { produce } from 'immer';

import { Friend } from './index';
import { AddFriend } from './action';

const initialState: Friend[] = [
  {
    name: 'Monica',
    age: 29
  }
];

export const reducer: Reducer<Friend[]> = (state = initialState, action) => {
  if (isType(action, AddFriend)) {
    return produce(state, draft => {
      draft.push({
        name: action.payload.name,
        age: action.payload.age
      });
    });
  }

  return state;
};

export default reducer;
