import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddFriend, GetFriends } from '../store/friend/';
import { NextPage } from 'next';
import styled from 'styled-components';
import { space } from '../assets/style/constValues';
import Link from 'next/link';

const Friends: NextPage = () => {
  const [item] = useState();
  let inputItem = '';

  const dispatch = useDispatch();
  const friends = useSelector(GetFriends);

  const onSubmit = () => {
    dispatch(
      AddFriend({
        name: inputItem,
        age: 31
      })
    );

    inputItem = '';
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
      {friends.map((friend, index) => (
        <p key={index}>{friend.name}</p>
      ))}
    </>
  );
};

const Title = styled.div`
  font-size: 20px;
  margin: ${space.level1};
`;

export default Friends;
