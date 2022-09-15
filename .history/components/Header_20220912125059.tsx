import React from 'react';
 
import { navLinks } from '../constants/constants';
import { Button } from './Button';
import Logo from './Logo';
import { MenuPopOver } from './MenuButton';

const Header = () => {
  return (
    <>
      <header className='sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-[#ebc034] py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8'>
         <div className='flex grow-0 basis-1/3 md:hidden'>
          <MenuPopOver />
         </div>
         <div className='flex grow-0 basis-1/3 justify-center md:justify-start'>
           <Logo/>
         </div>
         <ul
          className={styles.navWrapper}
        >
            {navLinks.map((nav, index) => (
                <li
                 key={nav.id}
                 className={`font-poppins font-normal cursor-pointer text-[16px]
                   ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                  text-white `}
                >
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
        <Button className='bg-yellow-700'>
          Book-Now
        </Button>
      </header>
    </>
  )
}

export default Header;

const styles ={
  navWrapper:`list-none sm:flex hidden justify-end items-center flex-1`,
}