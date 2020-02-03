import { GetFriends } from './selector';

describe('friend: selector', () => {
  test('red', () => {
    expect(
      GetFriends.resultFunc([
        {
          id: 1,
          name: 'Ross',
          age: 30
        }
      ])
    ).toEqual([
      {
        id: 1,
        name: 'Ross',
        age: 30
      }
    ]);
  });
});
