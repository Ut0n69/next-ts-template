import { createSelector } from 'reselect';
import { State } from '../../index';

import { Friend } from '../index';

export const GetFriends = createSelector(
  (state: State) => state.friend,
  (friends: Friend[]) => friends
);
