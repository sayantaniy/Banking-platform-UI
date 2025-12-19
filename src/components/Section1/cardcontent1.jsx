import React from 'react'


const cardcontent1 = (props) => {
  return (
    <div>
      
       <div className='absolute top-0 left-0 flex flex-col justify-between h-full p-6'>
    <h2 className='bg-white h-10 w-10 flex items-center justify-center rounded-full text-2xl font-bold'>{props.id+1}</h2>
    <p className='mt-70 text-md  text-shadow-2xs font-medium text-white'>{props.intro}</p>

    <div className='flex justify-between'>
    <button className='font-semibold text-lg text-white  bg-blue-600 rounded-full px-3 px-7 '>{props.tag}</button>
    <button className='text-white bg-blue-600 rounded-full h-12 w-12 text-2xl font-semiboldbold'><i className="ri-arrow-right-line"></i></button>
    </div>

    </div>
    </div>
  )
}

export default cardcontent1
