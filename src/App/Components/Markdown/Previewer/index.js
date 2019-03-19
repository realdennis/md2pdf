import React from 'react';
import styled from 'styled-components';
import Preview from './Preview.js';
import 'github-markdown-css';
const Wrapper = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  padding: 10px;
  @media print {
    padding: 0;
    overflow-y: hidden;
  }
`;
export default ({ source, children }) => {
  return (
    <Wrapper className="wrapper preview  markdown-body">
      <Preview source={source}>{children}</Preview>
    </Wrapper>
  );
};
