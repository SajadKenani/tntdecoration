import React, { createContext } from 'react';
import { UpperBar } from './UpperBar/UpperBar';
import { HomePage } from './HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {MyData} from "../src/UpperBar/MyData";
import { Wrapper } from "@googlemaps/react-wrapper";

type data = {
  id: any|Number,
}


export const MyContext = createContext(0);

function App() {
  const contextValue: data|any = {
    // 0 for English
    // 1 for Arabic
    id: Number(localStorage.getItem("myValue")) === undefined ? 1 : Number(localStorage.getItem("myValue")), 
    myId: Number(localStorage.getItem("theValue")) === undefined ? 3 : Number(localStorage.getItem("theValue")),
    
  }
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
    <div className="App">
      
      
      <MyContext.Provider value={contextValue}>
      <UpperBar />
      <div className='myLanButton' > <p className={`Para${contextValue.id}-para`} onClick={myFunction}>{MyData[contextValue.id].language}</p> </div>

      <HomePage />

      </MyContext.Provider>
    </div>
  );
}

export default App;

