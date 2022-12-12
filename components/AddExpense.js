import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const Portfolio = (props)=>(
    <div> 
        
        <p>These are some projects I have made</p>
        <p>Item Number</p>

        <NavLink to='/portfolio:{id}'>One item</NavLink><br/>
        <NavLink to='/portfolio:{id}'>two item</NavLink>
    </div>
);

export default Portfolio;