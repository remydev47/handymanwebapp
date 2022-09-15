import React from 'react'

interface Props {
    title: string;
    isActive?: boolean;
}

const NavButton = ({ title, isActive } : Props) => {
  return (
    <button className={`${isActive && "bg-[#036756]"} ${styles.wrapper}`}>
        {title}
    </button>
  )
}

export default NavButton
const styles={
    wrapper:`hover:bg-[#036756] text-white py-2 px-2 rounded font-bold`,
    button:``,
}