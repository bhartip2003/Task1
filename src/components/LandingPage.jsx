import React from 'react'
import TopGainers from './TopGainers'
import TopLosers from './TopLosers'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <TopGainers/>
        <TopLosers/>
    </div>
  )
}

export default LandingPage