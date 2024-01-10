import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Random from '../pages/Random';
import Search from '../pages/Search';


const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Search />} />
          <Route path='previsao-aleatoria' element={<Random />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes;