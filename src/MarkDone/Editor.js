import React from "react";
import styled from "styled-components";
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
`;
const Editor = ({ text, setText, onAreaChange, children }) => {
  const keyUpHandler = e => {
    if (e.key === "Tab") {
      e.preventDefault();
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      //console.log(start, end);
      //console.log(text[start], text[end]);
      const newText = text.substring(0, start) + "\t" + text.substring(end);
      setText(newText);
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
