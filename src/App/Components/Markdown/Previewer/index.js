import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import ErrorBoundary from './ErrorBoundary.js';
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
const LazyPreview = lazy(() => import('./Preview.js'));
export default ({ source, children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading duration={0.5} />}>
        <Wrapper className="preview  markdown-body">
          <LazyPreview source={source}>{children}</LazyPreview>
        </Wrapper>
      </Suspense>
    </ErrorBoundary>
  );
};
