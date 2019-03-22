import React from 'react';
import styled from 'styled-components';
import EditArea from './EditArea.js';

const Editor = ({ className, text, setText, width }) => {
  const [uploading, setUploading] = React.useState(false);
  function onDragLeave(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  function onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function onDrop(e) {
    handleUpload(e.dataTransfer.files);
  }
  function handleUpload(files) {
    if (files && files[0] && !uploading) {
      const reader = new FileReader();
      reader.onload = e => {
        setUploading(false);
        setText(e.target.result);
      };
      reader.readAsText(files[0]);
      setUploading(true);
    } else if (uploading) {
      console.log('正在上傳，請稍等~');
    }
  }
  React.useEffect(() => {
    function preventDefault(e) {
      e.preventDefault();
    }
    window.addEventListener('dragover', preventDefault);
    window.addEventListener('drop', preventDefault);
    return () => {
      window.removeEventListener('dragover', preventDefault);
      window.removeEventListener('drop', preventDefault);
    };
  });
  return (
    <div
      style={{ width, opacity: uploading ? 0.5 : 1 }}
      className={className}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <EditArea text={text} setText={setText}>
        {text}
      </EditArea>
    </div>
  );
};
export default styled(Editor)`
  flex-shrink: 0;
  padding-left: 15px;
  padding-bottom: 20px;
  width: 50%;
  background-color: #282c35;
  color: rgb(204, 204, 204);
`;
