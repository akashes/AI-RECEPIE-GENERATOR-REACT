import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const Form = ({setIngredients,ingredients}) => {
    const[ing,setIng]=useState('')

    const addIng=(e)=>{

      e.preventDefault()
      if(!ing){
        toast.error('Please enter an ingredient')
        return 
      }


     const isExists= ingredients.find(i=>i===ing)
     if(isExists){
      toast.error('ingredient already exists')
      return
     }

      setIngredients([...ingredients,ing])
      setIng('')
    }

    
  return (
    <>
    <form 
     onSubmit={(e)=>addIng(e)}
     className='mt-16 px-8 py-4 sm:px-16 md:px-30 lg:px-50 flex gap-2 md:gap-6'>
      <input name='ingredient' value={ing} onChange={(e)=>setIng(e.target.value)} aria-label='add ingredient' className='bg-white w-2/3 border border-gray-400 rounded-lg px-4 py-2 focus:outline-none md:py-4   shadow-sm text-gray-500' type="text" placeholder='eg : oregano' autoFocus />
      <button type='submit'  className=' add-btn  w-1/3 rounded-lg  bg-black text-white px-4 py-12md:py-2 font-semibold '>Add ingredient</button>
      </form>
      <ToastContainer />

    </>
  )
}

export default Form
