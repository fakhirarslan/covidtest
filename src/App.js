import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Main from './Components/MainComponent';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
