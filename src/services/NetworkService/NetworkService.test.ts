import { NetworkService, HTTPMethod } from './NetworkService';

describe('NetworkService', () => {
  const mock = [
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
  ];

  test('member data should be response from member api', async () => {
    const fetchMember = new NetworkService({
      httpMethod: HTTPMethod.GET
    });
    const result = await fetchMember.execute();
    const memberData = await result.data.friends;

    console.log(memberData);

    expect(memberData).toEqual(mock);
  });
});

// TODO: POST
