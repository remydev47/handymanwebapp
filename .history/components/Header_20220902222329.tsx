import React from 'react'
import NavButton from './NavButton'

const Header = () => {
  return (
    <div>
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
      <div>
        <div className={styles.navcontainer}>
          <NavButton isActive title='Buy Tickets' />
          <NavButton title='LogOut' />
        </div>
      </div>

      <div>

      </div>
      
    </div>
  )
}

export default Header

const styles={
 wrapper:`flex items-center space-x-2`,
 image:`rounded-full h-20 w-20`,
 text1:`texl-lg text-white font-bold`,
 text2:`text-xs text-emerald-500 truncate`,
 navcontainer:`bg-[#0A1F1C] p-4 space-x-2`
}