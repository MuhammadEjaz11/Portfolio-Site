import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Routes, Link, NavLink} from 'react-router-dom';
import Home from '../components/ExpenseDashboard';
import Portfolio from '../components/AddExpense';
import ContactMe from '../components/EditExpense';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import OneItem from '../components/OneItem';
import TwoItem from '../components/Twoitem';


const AppRoute = (
    <BrowserRouter>
        <div>
            <Header/>
        </div>
        <Routes>
        <Route exact={true} path='/' element={<Home/>}/>
        <Route exact={true} path='/portfolio' element={<Portfolio/>}/>
        <Route exact={true} path='/contact' element={<ContactMe/>}/>
        <Route exact={true} path='/portfolio/1' element={<OneItem/>}/>
        <Route exact={true} path='/portfolio/2' element={<TwoItem/>}/>
        <Route exact={true} path='*' element={<NotFound/>}/>


        </Routes>

    </BrowserRouter>
)



export default AppRoute;
