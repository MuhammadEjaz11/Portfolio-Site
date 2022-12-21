import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const Portfolio = ()=>(
    <div> 
        
        <p>These are some projects I have made</p>
        <p>Item Number</p>

        <NavLink to='/portfolio/1'>One item</NavLink><br/>
        <NavLink to='/portfolio/2'>two item</NavLink>
    </div>
);

export default Portfolio;