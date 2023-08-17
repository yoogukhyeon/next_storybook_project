import React from 'react';

export type Item = {
  no: number;
  type: string;
  writer: string;
  content: string;
  regDate: string;
};

interface IProps {
  item: Item;
  onClick: (key: string | number) => void;
  onClickBtn: (key: string | number) => void;
}

const NoticeList = ({ item, onClick, onClickBtn }: IProps) => {
  return (
    <li>
      <span>{item.no}</span>
      <span>{item.type}</span>
      <span>{item.writer}</span>
      <span className="content" onClick={() => onClick(item.no)}>
        {item.content}
      </span>
      <span>{item.regDate}</span>
      <span className="delete" onClick={() => onClickBtn(item.no)}>
        삭제
      </span>
    </li>
  );
};

export default React.memo(NoticeList);
