import React from 'react'

export default function Button({title, onClick, disabled}) {
  return (
    <div className='flex items-center'>
         <button disabled={disabled} className='flex items-center text-white bg-black hover:bg-opacity-85 pr-16 pl-16 rounded-xl pt-4 pb-4'  onClick={onClick}>{title}</button>
    </div>
  )
}
