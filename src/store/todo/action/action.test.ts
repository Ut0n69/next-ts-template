import { Add } from './action';

describe('action', () => {
  test('action', () => {
    const newTodo = {
      title: 'test'
    };

    expect(Add(newTodo)).toEqual({
      type: 'TODO/ADD',
      payload: {
        title: 'test'
      }
    });
  });
});
