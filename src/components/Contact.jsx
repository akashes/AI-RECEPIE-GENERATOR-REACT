import React from 'react'
import { useState } from 'react'
import userLogo from '../assets/OIP.jpg'
import { ImStarEmpty } from "react-icons/im";
import { FaStar } from "react-icons/fa";


const Contact = () => {

    function signup(e){
        e.preventDefault()
        const formEl = e.currentTarget
        const formData = new FormData(formEl)
        console.log(Object.fromEntries(formData))
        console.log(formData.get('name'))
        console.log(formData.get('email'))
        console.log(formData.get('password'))
        formEl.reset()
    }
 
  return (
   <>
   <form onSubmit={signup} >
    <input type="text" name='name' placeholder='name'  />
    <input type="email" name='email' placeholder='email' />
    <input type="password" name="password" id="password" placeholder='password' />
    <button>submit</button>
   </form>
   </>
  )
}

export default Contact
