import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddFriend, GetFriends, Friend } from '../store/friend/';
import { NextPage } from 'next';
import styled from 'styled-components';
import { space } from '../assets/style/constValues';
import { NetworkService, HTTPMethod } from '../services/NetworkService';

const Friends: NextPage = () => {
  const dispatch = useDispatch();
  const friends = useSelector(GetFriends);

  const getMember = async () => {
    const fetchMember = new NetworkService({
      httpMethod: HTTPMethod.GET
    });
    const result = await fetchMember.execute();
    result &&
      result.data.friends.map((friend: Friend) => {
        dispatch(AddFriend(friend));
      });
  };

  useEffect(() => {
    if (friends && !friends.length) getMember();
  }, []);

  return (
    <>
      <Title>Friend</Title>
      {friends && friends.length ? friends.map((friend, index) => <p key={index}>{friend.name}</p>) : <p>Loading...</p>}
    </>
  );
};

const Title = styled.h1`
  margin: ${space.level1};
`;

export default Friends;
