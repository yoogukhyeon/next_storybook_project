import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

interface IProps {
  content: string;
}

const ToastView = ({ content }: IProps) => {
  return <Viewer initialValue={content || ''} plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />;
};

export default ToastView;
