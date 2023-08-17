import NoticeForm from '@/components/notice/NoticeForm';
import { noticeList } from '@/mocks/notice';
import React from 'react';
import { GetServerSideProps } from 'next';
import { styled } from 'styled-components';

interface IProps {
  no: string;
}

const update = ({ no }: IProps) => {
  const findNotice = noticeList.find((val: any) => val.no === Number(no));
  return (
    <Container>
      <NoticeForm noticeData={findNotice} isUpdate={true} />
    </Container>
  );
};

const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
export const getServerSideProps: GetServerSideProps<any> = async ({ params }) => {
  const { no } = params;

  return {
    props: { no },
  };
};

export default update;
