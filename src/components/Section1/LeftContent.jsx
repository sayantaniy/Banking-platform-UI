import React from 'react'
import Arrow from './Arrow'
import Herotxt from './Herotxt'



const LeftContent = (props) => {
  return (
    <div className='h-full w-1/3 flex justify-between flex-col '>
      <Herotxt />
      <Arrow />
    </div>
  )
}

export default LeftContent
