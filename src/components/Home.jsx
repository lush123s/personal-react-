import React from 'react'

const Home = () => {
  return (
    <>
    <div className='container'>
        <div className="first flex justify-between">
    <div className="left w-[50%]">
    <img className='w-[100%]' src="https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8113.jpg" alt=""/>
    </div>
    <div className="right flex flex-col items-center justify-center w-[50%] ">
        <h1 className='text-slate-700 font-bold text-4xl'>Abu Baker Web Developer </h1>
        <p className='text-slate-800 mt-3 font-semibold text-xl'>We are the best coder in this world</p>
        <button className='bg-orange-600 mt-5 text-white font-semibold px-2 py-2 rounded-lg hover:bg-orange-700'> Get started</button>
    </div>
    </div>
    <img className='w-[450px] ml-72 mt-6' src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-website-clipart-website-concept-with-computer-cartoon-vector-png-image_11092719.png" alt="" />
    </div>
    </>
  )
}

export default Home
// <img src="https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8113.jpg" alt=""/>