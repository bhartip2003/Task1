import React from 'react'
import { GiCeilingLight, GiLipstick, GiPerfumeBottle, GiSlicedBread, GiWoodenChair } from 'react-icons/gi'

const buttonConfig = {
    "beauty": {component: GiLipstick, color: 'bg-pink-200'},
    "fragrances": {component: GiPerfumeBottle, color: 'bg-orange-200'},
    "furniture": {component: GiWoodenChair, color: 'bg-blue-200'},
    "groceries": {component: GiSlicedBread, color: 'bg-green-200'},
    "home-decoration": {component: GiCeilingLight, color: "bg-yellow-200"}
}

const Button = ({type, name, onClick}) => {
const { component: Icon, color } = buttonConfig[type];

  return (
   
    <button className={`${color} hover:bg-slate-200 active:bg-white text-[#080C1C] rounded-lg py-3 px-3 flex items-center gap-x-2 `}
    onClick={onClick}>
        <Icon />
        {name}
    </button>
   
  )
}

export default Button;