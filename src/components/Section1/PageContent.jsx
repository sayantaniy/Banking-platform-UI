import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='flex p-10 gap-10 items-center h-[90vh] justify-between'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default PageContent
