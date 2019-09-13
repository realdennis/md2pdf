import React from 'react';
import styled from 'styled-components';
const width = 15;

const UnwrappedDragBar = ({ className, setDrag, setStartX }) => {
  const dragStart = e => {
    const { nativeEvent } = e;
    const offsetX = nativeEvent.offsetX;
    setStartX(offsetX);
  };
  return (
    <div
      className={className}
      onMouseDown={e => {
        setDrag(true);
        dragStart(e);
      }}
    />
  );
};
export default styled(UnwrappedDragBar)`
  width: ${width + 'px'};
  flex-shrink: 0;
  background-color: ${props => (props.isDrag ? '#0984e3' : 'rgb(233,233,233)')};
  height: 100%;
  color: white;
  text-align: center;
  cursor: col-resize;
  user-select: none;
`;
