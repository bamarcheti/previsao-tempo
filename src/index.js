import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Aleatorio from './pages/Aleatorio/Aleatorio';
import App from './pages/App';
import MainLayout from './pages/Search/components/MainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path='previsao-aleatoria' element={<Aleatorio />} />
      </Route>
    </Routes>
  </HashRouter>
);