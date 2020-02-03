import { reducer } from './reducer';

describe('reducer', () => {
  test('redu', () => {
    const initialState = [{ id: 1, name: 'Ross', age: 30 }];
    expect(
      reducer(initialState, {
        type: 'FRIEND/ADD_FRIEND',
        payload: {
          id: 2,
          name: 'Rachel',
          age: 27
        }
      })
    ).toEqual([
      { id: 1, name: 'Ross', age: 30 },
      { id: 2, name: 'Rachel', age: 27 }
    ]);
  });
});
