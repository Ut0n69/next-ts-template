import * as React from 'react';
import styled from 'styled-components';
import { space } from '../assets/style/constValues';
import Link from 'next/link';

const Menu: React.FC = () => (
  <>
    <List>
      <Link href="/">
        <To>Top</To>
      </Link>
      <Link href="/friends">
        <To>Friends</To>
      </Link>
      <Link href="/todo">
        <To>Todo</To>
      </Link>
      <Link href="/tbd">
        <To>404</To>
      </Link>
    </List>
  </>
);

const List = styled.div`
  text-align: center;
  height: ${space.level3};
`;

const To = styled.a`
  margin-right: ${space.level2};
`;

export default Menu;
