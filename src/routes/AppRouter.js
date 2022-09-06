import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import { App } from '../pages/app';
import { Download } from '../pages/download';
import { Gallery } from '../pages/gallery';
import { Home } from '../pages/home';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/app' element={<App/>} />
        <Route path='/gallery' element={ <Gallery/> } />
        <Route path='/download' element={ <Download/> } />
    </Routes>
  )
}
