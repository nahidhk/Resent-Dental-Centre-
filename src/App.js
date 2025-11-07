import React from 'react';
import Nav from './components/Nav';
import DeviceSizeErr from './components/Err/DeviceSizeErr';
import SideNav from './components/SideNav';
import Prescription from './pages/Prescription';

function App() {
var width = document.body.clientWidth;

if (width >= 1000) {
  return (
    <>
      <Nav />
      
      <div className='flex'>
        <div className='dop1'>
          <SideNav />
        </div>
        <div className='dop2'>
          <Prescription />
        </div>
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
