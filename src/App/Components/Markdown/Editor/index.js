import React, { useState,useRef } from 'react';
import styled from 'styled-components';
import EditArea from './EditArea.js';
import DragBar from './DragBar.js';
const WrapperOfEdit = styled.div`
  flex-shrink: 0;
  padding-left: 15px;
  padding-bottom: 20px;
  width: 50%;
  display: flex;
  resize: horizontal;
  &.black {
    background-color: #282c35;
    color: rgb(204, 204, 204);
  }
`;

export default ({ text, setText }) => {
  const [width, setWidth] = useState(window.innerWidth/2);
  return (
    <WrapperOfEdit style={{width}} className="no-print black">
      <EditArea text={text} setText={setText}>
        {text}
      </EditArea>
      <DragBar width={width} setWidth={setWidth} />
    </WrapperOfEdit>
  );
};
