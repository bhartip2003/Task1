import React from 'react'
import { GiCeilingLight, GiLipstick, GiPerfumeBottle, GiSlicedBread, GiWoodenChair } from 'react-icons/gi'

const buttonConfig = {
    "beauty": {component: GiLipstick, color: 'pink-300'},
    "fragrances": {component: GiPerfumeBottle, color: 'orange-300'},
    "furniture": {component: GiWoodenChair, color: 'blue-300'},
    "groceries": {component: GiSlicedBread, color: 'green-300'},
    "home-decoration": {component: GiCeilingLight, color: "yellow-300"}
}

const Button = ({type}) => {
const { component: Icon, color } = buttonConfig[type];

  return (
    <button className={`bg-${color} text-black flex items-center gap-x-3`}>
        <Icon />
    </button>
  )
}

export default Button