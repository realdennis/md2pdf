import React,{useState} from 'react';
import styled from 'styled-components';
import { useProvided } from 'nonaction';
import { TextContainer } from '../../Container';
import Previewer from './Previewer';
import Editor from './Editor';
// import DragBar from './DragBar.js';
import 'github-markdown-css';
const Markdown = ({ className }) => {
  const [text, setText] = useProvided(TextContainer);
  //const onAreaChange = e => setText(e.target.value);
  // const [EditorWidth,setEditorWidth] = useState(50)
  // console.log(EditorWidth)
  return (
    <div className={className}>
      <Editor text={text} setText={setText}>
        {text}
      </Editor>
      {/* <DragBar className="no-print" setEditorWidth={setEditorWidth} /> */}
      <Previewer>{text}</Previewer>
    </div>
  );
};

export default styled(Markdown)`
  * {
    box-sizing: border-box;
  }
  height: 100%;
  display: flex;
  /* .wrapper {
    width: 100%;
    height: 100%;
    padding: 10px;
  } */
  .wrapper.editor {
    /* padding-left: 15px;
    padding-bottom: 20px;
    &.black {
      background-color: #282c35;
      color: rgb(204, 204, 204);
    } */
  }
`;
