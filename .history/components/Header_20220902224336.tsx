import React from 'react'
import NavButton from './NavButton';
//import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header className={styles.headercontainer}>
      <div className={styles.wrapper}>
        <img 
          className={styles.image}
          src="https://i.imgur.com/4h7mAu7.png"
          alt=''
        />
       <div>
        <h1 className={styles.text1}>ROYALE DRAW</h1>
        <p className={styles.text2}>User...</p>
       </div>
      </div>
      {/* buttons div */}
      <div className={styles.buttoncontainer}>
        <div className={styles.navcontainer}>
          <NavButton isActive title='Buy Tickets' />
          <NavButton title='LogOut' />
        </div>
      </div>

      <div className={styles.icon}>
        <Bars3BottomRightIcon className={styles.iconitem} /> 
        <span className='md:hidden'>
          <NavButton title='Logout' />
        </span>
      </div>

    </header>
  )
}

export default Header

const styles={
 wrapper:`flex items-center space-x-2`,
 image:`rounded-full h-20 w-20`,
 text1:`texl-lg text-white font-bold`,
 text2:`text-xs text-emerald-500 truncate`,
 navcontainer:`bg-[#0A1F1C] p-4 space-x-2`,
 iconitem:`cursor-pointer h-8 w-8 text-white mx-auto`,
 headercontainer:`grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5`,
 buttoncontainer:`hidden md:flex md:col-span-3 items-center justify-center rounded-md`,
 icon:`flex flex-col ml-auto text-right`
}