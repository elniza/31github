import React, { useState } from 'react'

const CreateTodoField = () => {
  const [title, setTitle] = useState('')



  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'>
      <input type="text" onChange={e => setTitle(e.target.value)}
      value={title}
      //onKeyPress={e => e.key === 'Enter' && addTod(e)}
      />
    </div>
  )
}

export default CreateTodoField


//subway always drastic current anger giant pond laundry opinion devote lock bomb