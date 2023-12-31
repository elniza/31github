import React from 'react'
import {BsCheck } from 'react-icons/bs'

const Check = ({isCompleted}) => {
  return (
    <div className={`border-2 rounded-lg border-purple-700 ${
      isCompleted ? 'bg-purple-700' : ''}
      w-5 h-5
    mr-3 flex items-center justify-center`}>
      {isCompleted &&
      <BsCheck size={24} className='text-gray-900' />
}
    </div>
  )
}

export default Check
