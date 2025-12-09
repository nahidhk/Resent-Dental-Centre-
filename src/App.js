import React from 'react';
import Nav from './components/system/Nav';
import DeviceSizeErr from './components/Err/DeviceSizeErr';
import Prescription from './pages/Prescription';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Insert from './pages/Insert';
import Toast from './components/system/Toast';
//import Login from './components/login/Login';
import ApiCheck from './components/Err/ApiCheck';
import MainDesk from './components/ui/desk/MainDesk';
import Help from './pages/Help';



// css
import 'animate.css';


//console
import eruda from "eruda";


function App() {
  eruda.init();
  var width = document.body.clientWidth;

  if (width >= 960) {
    return (
      <>
        <Nav />
        <MainDesk />
        <Routes>
          <Route path='/prescription' element={<Prescription />} />
          <Route path='/' element={<Home />} />
          <Route path='/insert' element={<Insert />} />
          <Route path='/help' element={<Help />} />
        </Routes>

        <Toast />
        <ApiCheck />

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
