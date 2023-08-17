import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { ellipsis2 } from '@/styles/common';
import { styled } from 'styled-components';
import { useRouter } from 'next/router';
import { noticeList } from '@/mocks/notice';
import NoticeList from '@/components/notice/common/NoticeList';
import MuiPagination from '@/components/toastEditor/MuiPagination';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import usePagination from '@/hooks/usePagination';

interface IProps {
  page: number;
}

const index = ({ page }: IProps) => {
  const router = useRouter();
  const goToWriter = () => {
    router.push({
      pathname: '/management/notice/create',
    });
  };
  const goToDetail = (no: string | number) => {
    router.push({
      pathname: `/management/notice/detail/${no}`,
    });
  };

  //공지사항 데이터 상태관리

  const [list, setList] = useState<any>();

  useEffect(() => {
    setList(noticeList);
  }, []);

  //pagination 공통

  const { currentPage, startIndex, endIndex, setCurrentPage, itemsPerPage } = usePagination(page, 10);

  const paginatedNoticeList = list?.slice(startIndex, endIndex);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    router.push({
      pathname: router.pathname,
      query: { page },
    });
  };

  //글삭제
  const onClickDeleteBtn = useCallback(
    (no: string | number) => {
      const filter: any = list?.filter((val) => val.no !== no);
      const newArray = [...filter];
      setList(newArray);
    },
    [list],
  );
  return (
    <>
      <NoticeListBox>
        <li className="header">
          <span>번호</span>
          <span>유형</span>
          <span>작성자</span>
          <span className="content">내용</span>
          <span>등록일</span>
          <span></span>
        </li>
        {paginatedNoticeList?.map((item: any, idx: number) => (
          <Fragment key={idx}>
            <NoticeList item={item} onClick={goToDetail} onClickBtn={onClickDeleteBtn} />
          </Fragment>
        ))}
        {list?.length > 0 && (
          <MuiPagination currentPage={currentPage} handlePageChange={handlePageChange} total={list?.length} itemsPerPage={itemsPerPage} />
        )}
      </NoticeListBox>
    </>
  );
};

const NoticeListBox = styled.ul`
  > li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    word-wrap: break-word;
    padding: 15px 0;

    > span {
      display: inline-block;
      width: 15%;
      line-height: 21px;
      text-align: center;
    }
    > .content {
      width: 40%;
      cursor: pointer;
      ${ellipsis2};
    }
    .delete {
      color: var(--text-title);
      background-color: red;
      border-radius: 15px;
      padding: 10px 0;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 0.5px;
      cursor: pointer;
    }
  }

  > li.header {
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

export const getServerSideProps: GetServerSideProps<any> = async ({ query }) => {
  const currentPage = query.page ? Number(query.page) : 1;

  return {
    props: {
      page: currentPage,
    },
  };
};

export default index;
