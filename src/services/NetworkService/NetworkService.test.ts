import { NetworkService, HTTPMethod } from './NetworkService';

describe('NetworkService', () => {
  test('should fetch member data from member api without url', async () => {
    const fetchMember = new NetworkService({
      httpMethod: HTTPMethod.GET
    });
    const result = await fetchMember.execute();
    const memberData = await result.data.friends;

    expect(memberData).toEqual([
      {
        id: 1,
        name: 'Ross',
        age: 30
      },
      {
        id: 2,
        name: 'Rachel',
        age: 27
      }
    ]);
  });

  test('should fetch member data from member api with url', async () => {
    const fetchMember = new NetworkService({
      httpMethod: HTTPMethod.GET,
      url: 'https://express-simple-boilerplate.now.sh'
    });
    const result = await fetchMember.execute();
    const memberData = await result.data.friends;

    expect(memberData).toEqual([
      {
        id: 1,
        name: 'Ross',
        age: 30
      },
      {
        id: 2,
        name: 'Rachel',
        age: 27
      }
    ]);
  });
});
