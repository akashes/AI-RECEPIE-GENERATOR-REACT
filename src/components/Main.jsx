import React, { useEffect, useState } from 'react'
import Form from './Form'
import { MdCancel } from "react-icons/md";
import { apiKey } from '../constants/apiKey';
import Recepie from './Recepie';
import Ingredients from './Ingredients';
import { useRef } from 'react';
import GetRecepie from './GetRecepie';
import { getRecipeFromMistral } from '../utils/ai.js';
const Main = () => {

  const [ingredients,setIngredients]=useState([])
  const[result,setResult]=useState('')
  const[fetching,setFetching]=useState(false)

  let sectionRef = useRef(null)


  const handleDelete=(i)=>{
    setIngredients(prevIngredients=>prevIngredients.filter(ing=>ing!=i))
  }
  const generateRecepie=async()=>{
    setFetching(true)
  
   const res = await getRecipeFromMistral(ingredients)
   console.log(res)
   setResult(res)
   setFetching(false)

  }

  useEffect(()=>{
    if(!fetching && result && sectionRef.current){
      console.log("Scrolling to:", sectionRef.current);

      sectionRef.current.scrollIntoView({behavior:"smooth"})
    }

  },[result])

  console.log(sectionRef)

  return (
    <div>
     <Form setIngredients={setIngredients} ingredients={ingredients}/>

     <Ingredients ingredients={ingredients} handleDelete={handleDelete}/>
     <GetRecepie ingredients={ingredients} generateRecepie={generateRecepie}  />
   
      
      <div  className='mt-4'>
        {
          fetching && <div className='text-center'>Loading...</div>
        }
 
      {
      result && <Recepie  ref={sectionRef} recepie={result} setResult={setResult} />
      }
      </div>
     
    </div>
  )
}

export default Main
