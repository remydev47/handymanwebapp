import React from 'react';
 
import { navLinks } from '../constants/constants';
import Logo from './Logo';

const Header = () => {
  return (
    <>
      <header className='sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-[#ebc034] py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8'>
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