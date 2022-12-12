import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Routes, Link, NavLink} from 'react-router-dom';


const Header = ()=> (
    <div> 
        <h1>Portfolio Site</h1> <br/>
        <NavLink to='/' activeclassname='active' >Home </NavLink> <br/>
        <NavLink to='/portfolio'>Portfolio</NavLink> <br/>
        <NavLink to='/contact'>Contact Me </NavLink> <br/>
    </div>
);

export default Header;