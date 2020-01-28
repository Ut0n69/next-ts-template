import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, GetAllTodos } from '../store/todo/';
import { NextPage } from 'next';
import styled from 'styled-components';
import { space } from '../assets/style/constValues';
import Link from 'next/link';
import { NetworkService, HTTPMethod } from '../services/NetworkService';

const About: NextPage = () => {
  const [item] = useState();
  let inputItem = '';

  const dispatch = useDispatch();
  const todos = useSelector(GetAllTodos);

  const aaa = async () => {
    const getMemberData = new NetworkService({
      httpMethod: HTTPMethod.GET
    });
    const result = await getMemberData.execute();
    console.log(result);
  };

  const bbb = async () => {
    const getMemberData = new NetworkService({
      httpMethod: HTTPMethod.POST,
      payload: { name: 'asdfasdf', age: 29 }
    });
    const result = await getMemberData.execute();
    console.log(result);
  };

  return (
    <>
      <Title>About</Title>
      <Link href="/">
        <a>Top</a>
      </Link>
      {item && <p>{item}</p>}
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(Add({ title: inputItem }));
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
      {todos.map((todo, index) => (
        <p key={index}>{todo.title}</p>
      ))}
      <button
        onClick={() => {
          aaa();
        }}
      >
        GETTTTTTTTTTTTTTT
      </button>
      <button
        onClick={() => {
          bbb();
        }}
      >
        POSTTTTTTTTTTTTTTT
      </button>
    </>
  );
};

const Title = styled.div`
  font-size: 20px;
  margin: ${space.level1};
`;

export default About;
