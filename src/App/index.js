import React from 'react';
import styled from 'styled-components';
import { Header, Markdown } from './Components';
import { Provider } from 'nonaction';
import { TextContainer } from './Container';
const App = ({className}) => {
  return (
    <div className={className} id="md2pdf-app">
      <Provider inject={[TextContainer]}>
        <Header />
        <Markdown />
      </Provider>
    </div>
  );
};
export default styled(App)`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 微軟正黑體;
  @media print {
    html {
      height: auto;
    }
    .no-print,
    .no-print * {
      display: none !important;
    }
  }
`;
