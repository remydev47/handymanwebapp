import React from 'react'

interface Props {
    title: string;
}

const NavButton = ({ title } : Props) => {
  return (
    <button>
        {title}
    </button>
  )
}

export default NavButton
const styles={
    button:``
}