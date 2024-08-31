
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/> <Home/><Footer/></>
    },
    {
      path:'/about',
      element:<><Navbar /> <About/><Footer/></>
    },
    {
      path:'/contact',
      element:<><Navbar /> <Contact/><Footer/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
