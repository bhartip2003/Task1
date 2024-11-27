import React from 'react'
import * as Gi from 'react-icons/gi'


const Button = ({type, name, onClick, buttonConfig}) => {
const { component: Icon, color } = buttonConfig[type];

const IconComponent = Gi[Icon]; 

  return (
   
    <button className={`${color} hover:bg-slate-200 active:bg-white focus:scale-105 focus:font-medium focus:text-violet-500 text-[#080C1C] rounded-lg py-2 px-3 flex items-center gap-x-2 `}
    onClick={onClick}>
        {IconComponent && <IconComponent />}
        {name}
    </button>
   
  )
}

export default Button;