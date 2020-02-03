import { actionCreatorFactory } from 'typescript-fsa';
import { Friend } from '../index';

const actionCreator = actionCreatorFactory('FRIEND');

export const AddFriend = actionCreator<Friend>('ADD_FRIEND');
