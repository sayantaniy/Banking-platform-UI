import React from 'react'
import Navbar from './Navbar'
import PageContent from './PageContent'

const Section1 = (props) => {
  return (
    <div className='w-full h-screen bg-gray-100'>
      <Navbar />
      <PageContent users={props.users} />
    </div>
  )
}

export default Section1
