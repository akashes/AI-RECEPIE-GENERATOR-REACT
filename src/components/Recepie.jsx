// import React from 'react'
// import { BiLike } from "react-icons/bi";


// const Recepie = ({recepie}) => {
//   return (
//     // <section>
//     //   <h2>Chef Calude Recommends:</h2>
//     //   <article aria-live='polite'>

//     //     <p>Based on the ingredients you have  , I would recommend delicious <strong>Beef bolongesne</strong>
        
//     //     Here is the recipie 
//     //     </p>
//     //     <h3>Beef bonoggese</h3>
//     //     <strong>
//     //         Ingredients:
//     //         <ul>
//     //             <li>dkfalsd</li>
//     //             <li>dkfalsd</li>
//     //             <li>dkfalsd</li>
//     //             <li>dkfalsd</li>
//     //             <li>dkfalsd</li>
//     //         </ul>
//     //         <strong>
//     //             Instructions:
//     //         </strong>
//     //         <ol>
//     //             <li>bring a large pot</li>
//     //             <li>bring a large pot</li>
//     //             <li>bring a large pot</li>
//     //             <li>bring a large pot</li>
//     //             <li>bring a large pot</li>
//     //         </ol>
//     //     </strong>
//     //   </article>
//     // </section>
//     <div className="flex flex-col items-center bg-white shadow-lg p-6 m-4 min-h-[500px] w-80">
//       <img src={recepie.image} alt="" className="max-w-[200px] rounded-sm" />
//       <h4 className="text-lg uppercase mt-4">{recepie.title}</h4>

//       {/* <p className="mb-2 text-gray-700">{text1}</p>
//       <p className="mb-2 text-gray-700">{text2}</p> */}
//       <div>
//         <BiLike/> {recepie.likes} likes
//       <h3 className='font-bold'>Unused Ingredient</h3>
//         {
//             recepie?.unusedIngredients?.map(ing=>(
//                <p>{ing.original}</p>
//             ))
//         }
//       </div>

//       <a href="#" className="mt-auto text-blue-500 hover:underline">Read More</a>
//     </div>
//   )
// }

// export default Recepie


import React, { forwardRef } from 'react'
import { MdCancel } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'

const Recepie = forwardRef((props,ref) => {
  return (
<>
<div ref={ref} className='  px-8   sm:px-16 md:px-30 lg:px-50 flex justify-between '>
     <div>
     <h1 className='text-3xl font-bold  my-6'>Recepie suggested by Chef Claude : </h1>
      <ReactMarkdown components={{
    h1: ({ node, ...props }) => <h1 className="text-2xl font-bold my-4" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-xl font-semibold my-3" {...props} />,
    p: ({ node, ...props }) => <p className="text-gray-700 my-2" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-2" {...props} />,
  }} >{props.recepie}</ReactMarkdown>
     </div>
     <MdCancel onClick={()=>props.setResult("")} className='text-3xl text-red-600' />
    </div>
</>
  )
})

export default Recepie
