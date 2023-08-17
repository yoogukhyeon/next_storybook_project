import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import { HookCallback } from '@toast-ui/editor/types/editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

interface IProps {
  content: string;
  editorRef: React.MutableRefObject<any>;
}

const ToastEditor = ({ content, editorRef }: IProps) => {
  // toolbar 옵션
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync'],
  ];

  //이벤트 hook
  const addImageHook = {
    addImageBlobHook: async (blob: File, callback: HookCallback) => {
      const formData = new FormData();

      formData.append('image', blob);

      //api 자리

      callback('https://webpus.com/wp-content/uploads/2020/08/best_loyalty_free_illustration_sites-1024x446.png');
      return false;
    },
  };

  return (
    <>
      {editorRef && (
        <Editor
          ref={editorRef}
          initialValue={content || ' '}
          initialEditType="wysiwyg"
          previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'} // tab, vertical
          hideModeSwitch={false}
          height="700px"
          theme={''} // '' & 'dark'
          usageStatistics={false}
          toolbarItems={toolbarItems}
          useCommandShortcut={true}
          plugins={[colorSyntax]}
          hooks={addImageHook}
          placeholder="내용을 입력해주세요"
        />
      )}
    </>
  );
};

export default ToastEditor;
