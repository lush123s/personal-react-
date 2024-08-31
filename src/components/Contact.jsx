import React from 'react'

const Contact = () => {
  return (
    <div className=' h-[70vh] flex items-center flex-col justify-center'>
      <div className="login border border-slate-300 flex flex-col p-5 h-90 w-72">
      <h1 className='font-bold text-2xl text-slate-700'>Email:</h1>
      <input className='bg-slate-200 rounded-sm px-3 py-1 mt-2' placeholder='Enter Email' type="text" />
      <h1 className='font-bold mt-3 text-2xl text-slate-700'>Password:</h1>
      <input className='bg-slate-200 mb-1 rounded-sm px-3 py-1 mt-2' placeholder='Enter Password' type="password" />
      <h1 className='font-bold mt-3 text-2xl text-slate-700'>Phone:</h1>
      <input className='bg-slate-200 mb-4 rounded-sm px-3 py-1 mt-2' placeholder='Enter Password' type="text" />
      <button className='bg-slate-700 text-white font-semibold px-2 py-2 rounded-lg hover:bg-slate-600'>Submit</button>
      </div>
    </div>
  )
}

export default Contact
