import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import useInput from '@/hooks/useInput';

const ToastEditor = dynamic(() => import('../toastEditor/ToastEditor'), {
  ssr: false,
});

interface IProps {
  isUpdate?: boolean;
  noticeData?: any;
}

const NoticeForm = ({ noticeData, isUpdate }: IProps) => {
  const editorRef = useRef<any>(null);
  const { values, onChange, onReset } = useInput({
    selectedOption: isUpdate ? noticeData.type : '',
    title: isUpdate ? noticeData.title : '',
    content: isUpdate ? noticeData.content : '',
  });

  const onSubmit = () => {
    const editorIns = editorRef?.current?.getInstance();

    const contentMark = editorIns.getMarkdown();
    const contentHtml = editorIns.getHTML();

    console.log('values.selectedOption ::', values.selectedOption);
    console.log('values.title ::', values.title);
    console.log('contentMark ::', contentMark);
    console.log('contentHtml ::::::::::', contentHtml);
    onReset();

    alert('전송');
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="selectBox">카테고리</label>
      <select id="selectBox" name="selectedOption" value={values.selectedOption} onChange={onChange}>
        <option value="">선택해주세요</option>
        <option value="공지사항">공지사항</option>
        <option value="자유">자유</option>
        <option value="정보">정보</option>
      </select>
      <br />
      <br />
      <label htmlFor="title">제목</label>
      <input type="text" id="title" name="title" placeholder="제목을 입력해주세요" value={values.title} onChange={onChange} />
      <br />
      <br />
      <ToastEditor content={isUpdate ? values.content : ''} editorRef={editorRef} />
      <br />
      <br />

      <button onClick={onSubmit}>{isUpdate ? '수정' : '등록'}</button>
    </form>
  );
};

export default NoticeForm;
