import React, { useState } from 'react'
import logo from '../assets/chef-claude-icon.png'

const Header = () => {


  return (
    <header className=' bg-white m-1   shadow-md  flex justify-center items-center gap-[11px] h-[80px]  '>
      <img className='w-12' src={logo} alt="" />
      
      <h1 className='text-3xl font-normal text-gray-800'>Chef Claude</h1>
   
   
    </header>
  )
}

export default Header
