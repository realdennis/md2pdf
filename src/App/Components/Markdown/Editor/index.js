import React from 'react';
import styled from 'styled-components';
import EditArea from './EditArea.js';

const Editor = ({ className, text, setText, width }) => {
  return (
    <div style={{ width }} className={className}>
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
