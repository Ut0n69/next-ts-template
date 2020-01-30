import { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { space } from '../assets/style/constValues';
import Link from 'next/link';

const Index: NextPage = () => {
  const [item, setItem] = useState();
  let inputItem = '';

  console.log('env: ', process.env.apiRoot);

  return (
    <>
      <Title>Item</Title>
      <Link href="/about">
        <a>Top</a>
      </Link>

      {item && <p>{item}</p>}
      <form
        onSubmit={e => {
          e.preventDefault();
          setItem(inputItem);
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
    </>
  );
};

const Title = styled.div`
  margin: ${space.level1};
`;

export default Index;
