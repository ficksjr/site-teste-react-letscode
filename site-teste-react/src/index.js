import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import App2 from './components/App2.js';
import App3 from './components/App3.js';
import {Lista,Item} from './components/Lista.js';


ReactDOM.render(
  <React.StrictMode>
    <Lista>
      Texto 1
      <Item key={999} id={999} completo={false}>Teste1</Item>
      <Item key={998} id={998} completo={true}>Teste2</Item>
    </Lista>
  </React.StrictMode>,
  document.getElementById('root')
);
