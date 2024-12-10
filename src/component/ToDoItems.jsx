import React from 'react'
import tick from "../assets/tick-mark.png"
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsTextLeft } from 'react-icons/bs';


const ToDoItems = ({text}) => {
  return (
    <div className='flex items-center my-4 gap-2'>
      <div className='flex flex-1  items-center cursor-pointer'>
<img src={tick} className='w-7' alt="" />
<p className="text-slate-700 ml-4 text-[17px] "> {text}</p>
      </div>
      <RiDeleteBin6Line className='text-red-600 w-3.5 cursor-pointer'/>
    </div>
  )
}

export default ToDoItems
