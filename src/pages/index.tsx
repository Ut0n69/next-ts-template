import { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { space } from '../assets/style/constValues';

const top: NextPage = () => {
  const [item, setItem] = useState();
  let inputItem = '';

  return (
    <>
      <Title>Item</Title>
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
  font-size: 20px;
  margin: ${space.level1};
`;

export default top;
