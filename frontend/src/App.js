import React, { useEffect, useState } from 'react';
import Nav from './components/system/Nav';
import DeviceSizeErr from './components/Err/DeviceSizeErr';
import Prescription from './pages/Prescription';
import { Routes, Route } from "react-router-dom";

// pages
import Home from './pages/Home';
import Insert from './pages/Insert';
import Toast from './components/system/Toast';
import ApiCheck from './components/Err/ApiCheck';
import MainDesk from './components/ui/desk/MainDesk';
import Help from './pages/Help';

// Insers Data Set
import Users from './components/insertPageData/Users';
import Categ from './components/insertPageData/Categ';
import Medicine from './components/insertPageData/Medicine';
// Wallpapers
import w1 from "./assets/wallpaper/w1.jpg";
import w2 from "./assets/wallpaper/w2.jpg";
import w3 from "./assets/wallpaper/w3.jpg";
import w4 from "./assets/wallpaper/w4.jpg";
import w5 from "./assets/wallpaper/w5.jpg";
import w6 from "./assets/wallpaper/w6.jpg";
// Loading Add
import Loading from './components/system/Loading';
// web setting
import 'animate.css';
import eruda from "eruda";


function App() {
  const randomImages = [w1, w2, w3, w4, w5, w6];
  const [randomBG, setRandomBG] = useState(null);
  useEffect(() => {
    const bg = randomImages[Math.floor(Math.random() * randomImages.length)];
    setRandomBG(bg);
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    eruda.init();
  }, []);
  const width = document.body.clientWidth;
  if (width >= 960) {
    return (
      <div className='wallpaper'>
        <Nav />
        <MainDesk />
        <Routes>
          <Route path='/prescription' element={<Prescription />} />
          <Route path='/' element={<Home />} />
          <Route path='/insert' element={<Insert />} />
          <Route path='/help' element={<Help />} />
          {/* Insers Link popup System */}
          <Route path='/insert/users' element={<Users />} />
          <Route path='/insert/category' element={<Categ />} />
          <Route path='/insert/medicine' element={<Medicine />} />
        </Routes>
        <Toast />
        <Loading />
        <ApiCheck />
      </div>
    );
  } else {
    return <DeviceSizeErr widthx={width} />;
  }
}
export default App;
