import React from 'react';
import Nav from './components/system/Nav';
import DeviceSizeErr from './components/Err/DeviceSizeErr';
import SideNav from './components/system/SideNav';
import Prescription from './pages/Prescription';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Insert from './pages/Insert';
import Toast from './components/system/Toast';
import ErrApi from './components/Err/ErrApi';


function App() {
  var width = document.body.clientWidth;

  if (width >= 960) {
    return (
      <>
        <Nav />

        <div className='flex'>
          <div className='dop1'>
            <SideNav />
          </div>
          <div className='dop2'>
            <Routes>
              <Route path='/prescription' element={<Prescription />} />
              <Route path='/' element={<Home />} />
              <Route path='/insert' element={<Insert />} />
            </Routes>
          </div>
          <Toast />
          <ErrApi />
        </div>
      </>
    )
  } else {
    return (
      <>
        <DeviceSizeErr widthx={width} />
      </>
    )
  }

}

export default App;
