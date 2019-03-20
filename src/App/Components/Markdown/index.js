import React, { useState } from 'react';
import styled from 'styled-components';
import { useProvided } from 'nonaction';
import { TextContainer } from '../../Container';
// import Previewer from './Previewer';
import Editor from './Editor';
import DragBar from './DragBar.js';
import 'github-markdown-css';
const LazyPreviewer = React.lazy(() => import('./Previewer'));
const Markdown = ({ className }) => {
  const [text, setText] = useProvided(TextContainer);
  const [isDrag, setDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [width, setWidth] = useState(window.innerWidth / 2);
  return (
    <div
      className={className}
      onMouseMove={e => {
        if (!isDrag) return;
        const pageX = e.nativeEvent.pageX;
        setWidth(pageX - startX);
      }}
    >
      <Editor className="no-print" width={width} text={text} setText={setText}>
        {text}
      </Editor>
      <DragBar
        className="no-print"
        isDrag={isDrag}
        setDrag={setDrag}
        setStartX={setStartX}
      />
      <React.Suspense fallback={<p>Waiting...</p>}>
        <LazyPreviewer>{text}</LazyPreviewer>
      </React.Suspense>
      {/* <Previewer>{text}</Previewer> */}
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
