import React from 'react'
import { MdCancel } from 'react-icons/md'


const Ingredients = ({ingredients,handleDelete}) => {
  return (
    <>
       <div className='sm:min-h-[300px] md:min-h-[400px] ' >
        <h1 className='font-semibold px-8 sm:px-16 md:px-30 lg:px-50 text-2xl mt-12 mb-4 ' >Ingredients on hand: <span className='text-sm font-light text-gray-600 '>(min 4) </span> </h1>
        <ul className='flex flex-col  justify-center flex-start px-4 sm:px-16 md:px-30 lg:px-50   '>
           {
            ingredients.length>0 && ingredients.map((i)=>{
              return(
                <div className='flex items-center  w-full gap-1   mx-4  '>

                <MdCancel
                aria-label={`remove ingredient ${i} from list `}
                 onClick={()=>handleDelete(i)}
                 className='text-red-600 text-xl'/>
                <li className=' capitalize text-xl my-2'>{i}</li>
            
            
              </div>                      )
            })
           }
        </ul>
      </div>
    
    
  
     </>
  )
}

export default Ingredients
