import React from 'react'
import Cardcontent1 from './cardcontent1'

const card = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden rounded-3xl p-2 relative w-1/3'>

         <img className='w-full h-full object-cover rounded-4xl' src={props.img}alt="pic" />

     <Cardcontent1 id={props.id} key={props.key} tag={props.tag} intro={props.intro} img={props.img} />


    </div>
  )
}

export default card
