import { useState, useEffect } from 'react';
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

  useEffect(() => {
    dispatch(
      AddFriend({
        name: inputItem,
        age: 31
      })
    );
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
      <button
        onClick={async () => {
          const res = await fetch('https://express-simple-boilerplate.now.sh', {
            method: 'GET'
          });
          const data = await res.json();

          console.log(data);
        }}
      >
        GET
      </button>
      <button
        onClick={async () => {
          const v = { name: 'asdfasdf', age: 29 };
          const res = await fetch('https://express-simple-boilerplate.now.sh', {
            method: 'POST',
            body: JSON.stringify(v),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await res.json();

          console.log(data);
        }}
      >
        POST
      </button>
      <button
        onClick={() => {
          console.log('fe');
        }}
      >
        PUT
      </button>

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
