import React, { useEffect, useState } from 'react';
import Nav from './components/system/Nav';
import DeviceSizeErr from './components/Err/DeviceSizeErr';
import Prescription from './pages/Prescription';
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import Home from './pages/Home';
import Insert from './pages/Insert';
import Toast from './components/system/Toast';
import ApiCheck from './components/Err/ApiCheck';
import MainDesk from './components/ui/desk/MainDesk';
import NUi from './components/ui/components/NUi/NUi';
import Memo from './pages/Memo';
// Insers Data Set
import Users from './components/insertPageData/Users';
import Categ from './components/insertPageData/Categ';
import Medicine from './components/insertPageData/Medicine';
import Mnotes from './components/insertPageData/Mnotes';
import Records from './components/insertPageData/record/Record';
import Typem from './components/insertPageData/Typem';

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
// Sessoin Data Setup
import { sessionData } from './scripts/sessionData';
// Welcome
import Welcome from "./welcome/Welcome"

// public page
import Pub from './components/pub/Pub';

function App() {

  // public page system 
  const location = useLocation();
  const pathName = location.pathname;
  // query parameter ধরলাম
  const queryParams = new URLSearchParams(location.search);
  const locid = queryParams.get("id");
  const randomImages = [w1, w2, w3, w4, w5, w6];
  // const [randomBG, setRandomBG] = useState(null);
  const [wonuiopen, setwonuiopen] = useState(true);
  const uipopupGetData = sessionData({ get: "uipopup" });

  useEffect(() => {
    if (uipopupGetData === false) {
      setwonuiopen(false);
    }
  }, uipopupGetData)
  setTimeout(() => {
    sessionData({ setDB: "uipopup", set: false })
    setwonuiopen(false);
  }, 15000);
















  if (sessionData({ get: "login" })) {
    const bg = randomImages[Math.floor(Math.random() * randomImages.length)];
    // setRandomBG(bg);
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    eruda.init();
    const width = document.body.clientWidth;
    if (width >= 960) {
      if (wonuiopen) {
        return <NUi />
      } else {
        return (
          <>
            <div className='wallpaper'>
              <Nav />
              <MainDesk />
              <Routes>
                <Route path='/prescription' element={<Prescription />} />
                <Route path='/' element={<Home />} />
                <Route path='/insert' element={<Insert />} />
                <Route path='/memo' element={<Memo />} />
                {/* Insers Link popup System */}
                <Route path='/insert/users' element={<Users />} />
                <Route path='/insert/category' element={<Categ />} />
                <Route path='/insert/medicine' element={<Medicine />} />
                <Route path='/insert/mNotes' element={<Mnotes />} />
                <Route path='/insert/records' element={<Records />} />
                <Route path='/insert/typem' element={<Typem />} />
              </Routes>
              <Toast />
              <Loading />
              <ApiCheck />
            </div>
          </>
        );
      }
    } else {
      return <DeviceSizeErr widthx={width} />;
    }
  } else {
    return (<> <Welcome />  <Toast /> </>)
  }
}
export default App;
