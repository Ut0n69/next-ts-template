import { actionCreatorFactory } from 'typescript-fsa';
import { Todo } from './index';

const actionCreator = actionCreatorFactory('TODO');

export const Add = actionCreator<Todo>('ADD');
