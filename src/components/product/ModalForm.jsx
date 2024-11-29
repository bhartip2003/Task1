import React from 'react'

const ModalForm = ({isOpen}) => {
  return (
    <>
    { isOpen ?
     (  <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
        <div>input</div>
        <div>buttons</div>
        </div>) : null
    }
    </>
  )
}

export default ModalForm