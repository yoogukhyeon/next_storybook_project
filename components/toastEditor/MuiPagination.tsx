import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from 'styled-components';

interface IProps {
  currentPage: number;
  handlePageChange: (_e: React.ChangeEvent<unknown>, page: number) => void;

  total: number;
  itemsPerPage: number;
}

const MuiPagination = ({ currentPage, handlePageChange, itemsPerPage, total }: IProps) => {
  return (
    <MuiPaginationWrap>
      <Stack spacing={2}>
        <Pagination count={Math.ceil(total / itemsPerPage)} page={currentPage} onChange={handlePageChange} color="primary" />
      </Stack>
    </MuiPaginationWrap>
  );
};

const MuiPaginationWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 100px 0;
`;

export default MuiPagination;
