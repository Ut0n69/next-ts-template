import { reducer } from './reducer';

describe('reducer', () => {
  test('redu', () => {
    const initialState = [{ title: 'test1' }];
    expect(
      reducer(initialState, {
        type: 'TODO/ADD',
        payload: {
          title: 'test2'
        }
      })
    ).toEqual([
      {
        title: 'test1'
      },
      {
        title: 'test2'
      }
    ]);
  });
});
