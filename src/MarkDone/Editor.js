import React from 'react';
import styled from 'styled-components';
const EditArea = styled.textarea`
  display: block;
  height: 100%;
  width: 100%;
  resize: none;
  outline: none;
  border: none;
  line-height: 1.25;
  background-color: inherit;
  color: inherit;
  caret-color: pink;
`;
const Editor = ({ text, setText, children }) => {
  const keyUpHandler = e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.target;
      let start = textarea.selectionStart;
      let end = textarea.selectionEnd;
      const newText = text.substring(0, start) + '\t' + text.substring(end);
      setText(newText);
      setTimeout(
        () => (textarea.selectionStart = textarea.selectionEnd = start + 1)
      );
    }
  };
  const changeHandler = e => setText(e.target.value);

  return (
    <EditArea
      onChange={changeHandler}
      onKeyDown={keyUpHandler}
      name="editor"
      id="editor"
      value={children}
    />
  );
};

export default Editor;
