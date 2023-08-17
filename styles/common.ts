import { css } from 'styled-components';

//글자 2줄처리
export const ellipsis2 = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
