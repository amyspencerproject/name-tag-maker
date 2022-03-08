import React from 'react';
import ReactDOM from 'react-dom';
import NameTag from './NameTag';
import {names} from './data'

import "./styles.css";

const renderName = (name) => (
  <NameTag key={name.id} name={name.person} />
);

const App = () => {
  const nameTagElements = names.map(renderName);

  return (
    <div classname="App">
    <h1>Name Tag Generator</h1>
    {NameTagElements}
    </div>
  );
};



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
