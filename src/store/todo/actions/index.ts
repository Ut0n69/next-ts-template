import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('TODO');

export const Add = actionCreator<{ title: string }>('ADD');
