

import React, { forwardRef } from 'react'
import { MdCancel } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
//needed to pass ref in here to parent , so forward ref is used
//react markdown to format markdown result got from the api
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
