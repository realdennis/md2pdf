import React from "react";
import styled from "styled-components";
import { useProvided } from "nonaction";
import { TextContainer } from "../Container";
import Preview from "./Preview.js";
import Editor from "./Editor.js";
const SplitLine = styled.div`
  background-color: black;
  width: 1px;
  opacity: 0.3;
  height: 100%;
`;

const MarkDone = ({ className }) => {
  const [text, setText] = useProvided(TextContainer);
  //const onAreaChange = e => setText(e.target.value);

  return (
    <div className={className}>
      <div className="wrapper editor black no-print">
        <Editor text={text} setText={setText}>
          {text}
        </Editor>
      </div>
      <SplitLine />
      <div className="wrapper preview">
        <Preview>{text}</Preview>
      </div>
    </div>
  );
};

export default styled(MarkDone)`
  * {
    box-sizing: border-box;
  }
  height: 100%;
  display: flex;
  .wrapper {
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .wrapper.editor {
    padding-left: 15px;
    padding-bottom: 20px;
  }
  .wrapper.black {
    background-color: #282c35;
    color: rgb(204, 204, 204);
  }
  .wrapper.preview {
    @media print {
      padding: 0;
      overflow-y:hidden;
    }
  }
`;
