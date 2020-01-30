import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, GetAllTodos } from '../store/todo';
import { NextPage } from 'next';
import styled from 'styled-components';
import { space } from '../assets/style/constValues';
import Link from 'next/link';

const Todo: NextPage = () => {
  const [item] = useState();
  let inputItem = '';

  const dispatch = useDispatch();
  const todos = useSelector(GetAllTodos);

  return (
    <>
      <Title>Todo</Title>
      <Link href="/">
        <LinkMenu>Top</LinkMenu>
      </Link>
      <Link href="/">
        <LinkMenu>Friends</LinkMenu>
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
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

const Title = styled.h1`
  margin: ${space.level1};
`;

const LinkMenu = styled.a`
  margin: ${space.level2};
`;

export default Todo;
