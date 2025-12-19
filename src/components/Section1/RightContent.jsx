import React from 'react'
import Card from './card'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-xl width w-2/3 flex flex-nowrap overflow-x-auto gap-5'>
      
     {props.users.map((elem,idx) => {
        return <Card key ={idx} id={idx} intro={elem.intro} tag={elem.tag} key={elem.key} img={elem.img} />
     })}

    </div>
  )
}

export default RightContent
