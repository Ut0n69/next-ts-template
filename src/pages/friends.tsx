import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddFriend, GetFriends, Friend } from '../store/friend/';
import { NextPage } from 'next';
import styled from 'styled-components';
import { space } from '../assets/style/constValues';
import Link from 'next/link';
import { NetworkService, HTTPMethod } from '../services/NetworkService';

const Friends: NextPage = () => {
  const [item] = useState();
  let inputItem = '';

  const dispatch = useDispatch();
  const friends = useSelector(GetFriends);

  const getMember = async () => {
    const fetchMember = new NetworkService({
      httpMethod: HTTPMethod.GET
    });
    const result = await fetchMember.execute();
    result.data.friends.map((friend: Friend) => {
      dispatch(AddFriend(friend));
    });
  };

  useEffect(() => {
    getMember();
  }, []);

  const onSubmit = () => {
    console.log(inputItem);
  };

  return (
    <>
      <Title>Friend</Title>
      <Link href="/">
        <a>Top</a>
      </Link>
      {item && <p>{item}</p>}
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          name="item"
          onChange={e => {
            inputItem = e.target.value;
          }}
        />
        <button type="submit">Add</button>
      </form>
      {friends && friends.length ? friends.map((friend, index) => <p key={index}>{friend.name}</p>) : <p>Loading...</p>}
    </>
  );
};

const Title = styled.div`
  margin: ${space.level1};
`;

export default Friends;
