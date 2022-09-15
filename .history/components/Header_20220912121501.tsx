import React from 'react';
 
import { navLinks } from '../constants/constants';
import Logo from './Logo';

const Header = () => {
  return (
    <>
      <header>
         <div>
           Menubutton
         </div>
         <div>
           <Logo/>
         </div>
      </header>
    </>
  )
}

export default Header