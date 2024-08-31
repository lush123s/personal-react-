import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <header className={`h-20 p-9 px-14  `}>
   <nav className=' flex items-center justify-between'>
    <h1 className='font-bold text-3xl text-slate-700'>Your<span className='text-orange-600'>Logo®</span></h1>
    <div className="tags flex gap-14">
       <NavLink className={function(e){
        {return e.isActive?'text-orange-600':""}
       }} to="/"> <li className='list-none font-semibold text-[16.5px]  hover:text-orange-600 cursor-pointer'>Home</li></NavLink>
        <NavLink className={function(e){
        {return e.isActive?'text-orange-600':""}
       }}  to="/about"><li className='list-none font-semibold text-[16.5px] hover:text-orange-600 cursor-pointer'>About</li></NavLink>
        <NavLink className={function(e){
        {return e.isActive?'text-orange-600':""}
       }} to="/contact"><li className='list-none font-semibold text-[16.5px] hover:text-orange-600 cursor-pointer'>Contact</li></NavLink>
    </div>
    <div className="login flex gap-7 ">
        <button className='text-black font-semibold px-2 py-2 rounded-lg hover:bg-slate-100'>Dark/Light</button>
        <button className='bg-orange-600 text-white font-semibold px-2 py-2 rounded-lg hover:bg-orange-700'> Get started</button>
    </div>
   </nav>
    </header>
    <hr className='mt-4'/>
    </>
  ) 
}

export default Navbar
