import { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { space } from '../assets/style/constValues';

const Index: NextPage = () => {
  const [item, setItem] = useState();
  let inputItem = '';

  return (
    <>
      <Title>Top</Title>
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
      {item && <p>{item}</p>}
    </>
  );
};

const Title = styled.h1`
  margin: ${space.level1};
`;

export default Index;
