import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useProvided } from 'nonaction';
import { TextContainer, FileTextContainer } from '../../Container';
import Previewer from './Previewer';
import Editor from './Editor';
import DragBar from './DragBar.js';
import 'github-markdown-css';
import useDrop from '../../Container/Hooks/useDrop.js';
const Markdown = ({ className }) => {
  const [text, setText] = useProvided(TextContainer);
  const [, setFileText] = useProvided(FileTextContainer);
  const [isDrag, setDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [width, setWidth] = useState(window.innerWidth / 2);
  const markdownRef = useRef(null);
  const [uploading, isOver] = useDrop(markdownRef, setFileText);
  // Partial fileText & text

  return (
    <div
      ref={markdownRef}
      style={{ opacity: isOver || uploading ? 0.5 : 1 }}
      className={className}
      onMouseMove={e => {
        if (!isDrag) return;
        const pageX = e.nativeEvent.pageX;
        setWidth(pageX - startX);
      }}
    >
      <Editor className="no-print" width={width} setText={setText} />
      <DragBar
        className="no-print"
        isDrag={isDrag}
        setDrag={setDrag}
        setStartX={setStartX}
      />
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
`;
