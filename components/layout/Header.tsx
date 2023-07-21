import React from 'react';
import styled from 'styled-components';
import Button from '@/components/Button';

type User = {
  name: string;
};

interface IProps {
  user?: User;
  onClick: () => void;
}

const Header = ({ user, onClick }: IProps) => {
  return (
    <HeaderWrap>
      <h1>로고</h1>
      <ul>
        <li>
          {user ? (
            <>
              <span>{user.name}</span> <Button primary={true} label="login" onClick={onClick} />
            </>
          ) : (
            <Button primary={false} label="log Out" onClick={onClick} />
          )}
        </li>
      </ul>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid skyblue;
  padding: 0 50px;

  li {
    list-style: none;
  }
`;

export default Header;
