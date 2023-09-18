import React, { createContext } from 'react';
import { UpperBar } from './UpperBar/UpperBar';
import { HomePage } from './HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {MyData} from "../src/UpperBar/MyData";
import { Wrapper } from "@googlemaps/react-wrapper";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import { Footer } from './Footer/Footer';
import { AboutUs } from './AboutUs/AboutUs';
import { OurWork } from './OurWork/OurWork'
import { ContactUs } from './ContactUs/ContactUs';

type data = {
  id: any|Number,
  myId: any|Number,
}


export const MyContext = createContext(0);

function App() {
  const contextValue: data|any = {
    // 0 for English
    // 1 for Arabic
    id: (localStorage.getItem("myValue")) === null ? 0 : Number(localStorage.getItem("myValue")), 
    myId: (localStorage.getItem("theValue")) === null ? 2 : Number(localStorage.getItem("theValue")),
    
  }
  console.log(Number(localStorage.getItem("theValue")))
  const myFunction = () => {
    if(Number(localStorage.getItem("myValue")) === 0){
    localStorage.setItem("myValue", "1")
    localStorage.setItem("theValue", "3")
    
    } else if (Number(localStorage.getItem("myValue")) === 1){
    localStorage.setItem("myValue", "0")
    localStorage.setItem("theValue", "2")
    }

    window.location.reload();
  }

  return (
    <Router>
    <MyContext.Provider value={contextValue}>
      <UpperBar />
        <div className='myLanButton' onClick={myFunction}> <p className={`Para${contextValue.id}-para`} >{MyData[contextValue.id].language}</p></div>
        <Routes>
        <Route path='/tntdecoration' element={<HomePage />}/>

        <Route path='/tntdecoration/aboutUs' element={ <AboutUs />}/>

        <Route path='/tntdecoration/OurWork' element={<OurWork />}/>

        <Route path='/tntdecoration/ContactUs' element={ <ContactUs />}/>

      </Routes>
      <Footer />
      </MyContext.Provider>
      </Router>


  );
}

export default App;
