import React, { useState } from 'react';
import { BiSolidCoinStack } from "react-icons/bi";
import Coin from '../../assets/Currency.png';
import Logo from '../../assets/logo.png'

const NavBar = ({coin}) => {
  return (
    <div className='max-w-360 mx-auto'>
     <nav className='sticky top-0 shadow-md z-50'>
       <div >
        <div className="navbar bg-linear-to-r from-green-400 to-red-400 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul tabIndex="-1"
                className="menu menu-sm dropdown-content bg-green-100 space-y-2 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li className='btn'>Available</li>
                <li className='btn'>Selected </li>
              </ul>

            </div>
            <img src={Logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">

          </div>
          <div className="navbar-end space-x-2">
            <p className='text-2xl font-bold'>
              <span>
               {coin}
              </span>  TaKa
            </p>
            <img src={Coin} alt="" c />
          </div>
        </div>
      </div>
     </nav>
    </div>
  );
};

export default NavBar;