import { GetAllTodos } from './selector';

describe('friend: selector', () => {
  test('red', () => {
    expect(
      GetAllTodos.resultFunc([
        {
          title: 'test'
        }
      ])
    ).toEqual([
      {
        title: 'test'
      }
    ]);
  });
});
