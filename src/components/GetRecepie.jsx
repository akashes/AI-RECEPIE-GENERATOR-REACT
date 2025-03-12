import React from 'react'

const GetRecepie = ({ingredients,generateRecepie}) => {
  return (
    <div>
         {
        ingredients.length>3 && (
          <section className='mt-12 max-w-4/5 bg-gray-200 p-4 mx-auto min-h-32 flex justify-center items-center rounded-lg'>
          <div className='flex flex-col items-center sm:flex-row  justify-between w-full px-8'>
            <div>
            <h2 className='text-lg font-semibold'>Ready for a recepie?</h2>
            <p className='text-sm font-light mt-2'>Generate a recepie from your list of ingredients</p>
            </div>
            <div className='flex justify-center items-center ms-8 m-1'>
            <button onClick={generateRecepie} className='bg-orange-700 text-white px-4 py-2   rounded-md'>Get a recepie</button>
  
            </div>
          </div>
  
        </section>

        )
      }
    </div>
  )
}

export default GetRecepie
