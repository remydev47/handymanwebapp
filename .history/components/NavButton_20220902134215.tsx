import React from 'react'

interface Props {
    title: string;
}

const NavButton = ({ title } : Props) => {
  return (
    <button className={styles.wrapper}>
        {title}
    </button>
  )
}

export default NavButton
const styles={
    wrapper:`bg-[#036756] text-white py-2 px-2 rounded`,
    button:``,
}