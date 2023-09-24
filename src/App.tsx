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
import { MyDepartment } from './MyDepartment/MyDepartment';

type data = {
  id: any|Number,
  myId: any|Number,
  myDeptId: any|Number,
}


export const MyContext = createContext(0);

function App() {

  const myArr: number[] = []

  const contextValue: data|any = {
    // 0 for English
    // 1 for Arabic
    id: (localStorage.getItem("myValue")) === null ? 0 : Number(localStorage.getItem("myValue")), 
    myId: (localStorage.getItem("theValue")) === null ? 2 : Number(localStorage.getItem("theValue")),
    myDeptId: (localStorage.getItem("DeptValue")) === null ? 4 : Number(localStorage.getItem("DeptValue")),
    
  }
  console.log(Number(localStorage.getItem("theValue")))
  const myFunction = () => {
    if(Number(localStorage.getItem("myValue")) === 0){
    localStorage.setItem("myValue", "1")
    localStorage.setItem("theValue", "3")
    localStorage.setItem("DeptValue", "5")
    
    } else if (Number(localStorage.getItem("myValue")) === 1){
    localStorage.setItem("myValue", "0")
    localStorage.setItem("theValue", "2")
    localStorage.setItem("DeptValue", "4")
    }

    for (let i = 0; i < Object.values(MyData[4]).length / 3; i++){
      myArr.push(1)

     
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

        <Route path={`/tntdecoration/MyDepartment0`} element={ <MyDepartment />} />
        <Route path={`/tntdecoration/MyDepartment1`} element={ <MyDepartment />} />
        <Route path={`/tntdecoration/MyDepartment2`} element={ <MyDepartment />} />
        <Route path={`/tntdecoration/MyDepartment3`} element={ <MyDepartment />} />
        <Route path={`/tntdecoration/MyDepartment4`} element={ <MyDepartment />} />
        <Route path={`/tntdecoration/MyDepartment5`} element={ <MyDepartment />} />
        <Route path={`/tntdecoration/MyDepartment6`} element={ <MyDepartment />} />
        <Route path={`/tntdecoration/MyDepartment7`} element={ <MyDepartment />} />
        <Route path={`/tntdecoration/MyDepartment8`} element={ <MyDepartment />} />
        <Route path={`/tntdecoration/MyDepartment9`} element={ <MyDepartment />} />
        


      </Routes>
      <Footer />
      </MyContext.Provider>
      </Router>


  );
}

export default App;
