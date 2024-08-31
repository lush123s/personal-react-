import React from 'react'

const About = () => {
  return (
    <>
    <div className='container'>
      <div className="first flex justify-between">
    <div className="left w-[50%]">
    <img className='w-[90%]' src="https://img.freepik.com/premium-vector/hand-drawn-international-employees-illustration_23-2149676061.jpg" alt=""/>
    </div>
    <div className="right flex flex-col items-center justify-center w-[50%] ">
        <h1 className='text-slate-700 font-bold text-5xl'>Know About us </h1>
        <p className='text-slate-800 mt-3 font-semibold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, atque nobis! Id voluptates harum ut tempore nesciunt modi nihil, quos ipsam molestiae natus sapiente at incidunt, dolore inventore sunt blanditiis?</p>
        <button className='bg-slate-800 mt-5 text-white font-semibold px-2 py-2 rounded-lg hover:bg-slate-700'> Get started</button>
    </div>
    </div>
   
    </div>
    </>
  )
}

export default About
