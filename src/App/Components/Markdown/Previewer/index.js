import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
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
const LazyPreivew = lazy(() => import('./Preview.js'));
export default ({ source, children }) => {
  return (
    <Suspense fallback={<Loading duration={0.5} />}>
      <Wrapper className="preview  markdown-body">
        <LazyPreivew source={source}>{children}</LazyPreivew>
      </Wrapper>
    </Suspense>
  );
};
