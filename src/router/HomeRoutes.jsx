import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Clients } from '../views/clients/Clients';
import { Home } from '../views/home/pages/Home';
import { Items } from '../views/items/pages/Items';
import { Sales } from '../views/sales/pages/Sales';

export const HomeRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/items' element={<Items />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/*' element={<Navigate to='/Home' />} />
      </Routes>
    </>
  );
};
