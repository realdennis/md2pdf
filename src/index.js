import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header.js";
import MarkDone from "./MarkDone";
import { Provider } from "nonaction";
import { TextContainer } from "./Container";
import "normalize.css";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Provider inject={[TextContainer]}>
        <Header />
        <MarkDone />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
