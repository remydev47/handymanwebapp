import React from 'react'

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
        <div>
          
        </div>
      </div>

    </div>
  )
}

export default Header

const styles={
 wrapper:`flex items-center space-x-2`,
 image:`rounded-full h-20 w-20`,
 text1:`texl-lg text-white font-bold`,
 text2:`text-xs text-emerald-500 truncate`
}