import React, { useState } from 'react';
import styled from 'styled-components';
const width = 15;
const UnwrappedDragBar = ({ className, width, setWidth }) => {
  const [isDrag, setDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const dragStart = e => {
    const { nativeEvent } = e;
    const offsetX = nativeEvent.offsetX;
    setStartX(offsetX);
  };
  const dragHandler = e => {
    const { nativeEvent } = e;
    const offsetX = nativeEvent.offsetX;
    setWidth(width + offsetX - startX);
  };
  return (
    <div
      className={className}
      onMouseDown={e => {
        // console.log('mousedown');
        setDrag(true);
        dragStart(e);
      }}
      onMouseUp={() => {
        // console.log('mouseUp')
        setDrag(false);
      }}
      onMouseMove={e => {
        // console.log('mouseMove')
        isDrag && dragHandler(e);
      }}
      onMouseOut={() => {
        // console.log('out')
        setDrag(false);
      }}
    >
      <p />
    </div>
  );
};
export default styled(UnwrappedDragBar)`
  width: ${width + 'px'};
  flex-shrink: 0;
  background-color: slategray;
  height: 100%;
  color: white;
  text-align: center;
  opacity: 0.8;
  cursor: col-resize;
  &:hover {
    opacity: 1;
  }
  user-select: none;
`;
