import NoticeForm from '@/components/notice/NoticeForm';
import React from 'react';
import { styled } from 'styled-components';

const create = () => {
  return (
    <Container>
      <NoticeForm />
    </Container>
  );
};
const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
export default create;
