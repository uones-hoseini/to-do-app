import React from 'react'
import tick from "../assets/tick-mark.png"
// import { SiTicktick } from "react-icons/si";

const ToDoList = () => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 py-7  items-center cursor-pointer'>
<img src={tick} className='w-7' alt="" />
<p className="text-slate-700 ml-4 text-[17px] "> test coding</p>
      </div>
      
    </div>
  )
}

export default ToDoList
