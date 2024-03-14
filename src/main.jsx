import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './pages/Header';
import { Welcome } from './pages/Welcome';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Welcome/>
  </React.StrictMode>,
)
