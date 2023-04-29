import React from 'react'
import Navbar from "./Navbar.js"
import Banner from './Banner.js';
import {Outlet} from "react-router-dom";
const Root = () => {
  return (
    <div>
        <header><Navbar/></header>
        <Banner/>
        <Outlet/>   
    </div>
  )
}

export default Root
