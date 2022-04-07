import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';



function Routers() {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/:category/search/:keyword' element={<Catalog />} />
      <Route path='/:category/:id' element={<Detail />} />
      <Route path='/:category/' element={<Catalog />} />
    </Routes>
  )
};

export default Routers;
