import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-between h-28  bg-gray-100 shadow-2xl'>

      <div  className='flex gap-20'>
        <img  className='w-20 h-8  ml-5' src={logo}></img>
        <Link to="/browse"><p className='text-black font-md'>Job</p></Link>
        <p className='text-black font-md'>Contact</p>
        <p className='text-black font-md'>Job</p>
        <p className='text-black font-md'>About Us</p>
      </div>
      <div>
      <Link to="/login"><button className=' px-4 py-2 bg-black rounded-lg mr-6 text-white font-md cursor-pointer'>Sign In</button></Link> 
      </div>
      


    </div>
  )
}

export default Header
