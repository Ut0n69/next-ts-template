import { AddFriend } from './action';

describe('action', () => {
  test('action', () => {
    const newFriend = {
      id: 123,
      name: 'test',
      age: 123
    };

    expect(AddFriend(newFriend)).toEqual({
      type: 'FRIEND/ADD_FRIEND',
      payload: {
        id: 123,
        name: 'test',
        age: 123
      }
    });
  });
});
