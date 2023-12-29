import React from 'react'
import Scanner from './Scanner'
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import ShowTicket from './ShowTicket';


const App = () => {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/scanner" element={<Scanner/>}/>
          <Route path="/showticket" element={<ShowTicket/>}/>
 
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App