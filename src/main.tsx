import React from 'react';
import ReactDOM from 'react-dom/client';
import HWorld from './components/HWorld';
import { GifExpertApp } from "./components/GifExpertApp";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HWorld /> */}
    <GifExpertApp />
  </React.StrictMode>,
)
