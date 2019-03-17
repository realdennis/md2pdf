import React from 'react';
import ReactDOM from 'react-dom';
import { Header,Markdown } from './Components';
import { Provider } from 'nonaction';
import { TextContainer } from './Container';
import 'normalize.css';
import './styles.css';
function App() {
  return (
    <div className="App">
      <Provider inject={[TextContainer]}>
        <Header />
        <Markdown />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
