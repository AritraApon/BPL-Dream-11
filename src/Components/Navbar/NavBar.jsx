import React from 'react';
import { BiSolidCoinStack } from "react-icons/bi";
import Coin from '../../assets/Currency.png';
import Logo from '../../assets/logo.png'
const NavBar = () => {
    return (
        <div className='max-w-360 mx-auto'>
            <div>
                <div className="navbar bg-linear-to-r from-green-400 to-red-400 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

    </div>
    <img src={Logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">

  </div>
  <div className="navbar-end space-x-2">
    <p className='text-2xl font-bold'>
        <span>
            0
        </span>  TaKa
          </p>
   <img src={Coin} alt=""  c/>
  </div>
</div>
            </div>
        </div>
    );
};

export default NavBar;