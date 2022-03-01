import React from 'react';
import ReactDOM from 'react-dom';
import NameTag from './NameTag';

import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Erin" />
    <NameTag name="Jake" />
    <NameTag name="Sarah" />
    <NameTag name="Burt" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
