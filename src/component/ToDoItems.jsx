import React from "react"
import tick from "../assets/tick-mark.png"
import circle from "../assets/empty-circle.png"
import { RiDeleteBin6Line } from "react-icons/ri"
import { BsTextLeft } from "react-icons/bs"
import { FaRegCircle } from "react-icons/fa"
const ToDoItems = ({ text, id, deleteItems, isComplete, toggleItems }) => {
  return (
    <div className="flex items-center my-4 gap-2">
      <div onClick={() => toggleItems(id)} className="flex flex-1  items-center cursor-pointer">
        <img src={isComplete ? tick : circle} className="w-7" alt="" />

        <p className={`${isComplete?"line-through text-slate-300 ml-4 text-[17px] ":"text-slate-700 ml-4 text-[17px]"}`}> {text}</p>
      </div>
      <RiDeleteBin6Line
        onClick={() => {
          deleteItems(id)
        }}
        className="text-red-600 w-3.5 cursor-pointer"
      />
    </div>
  )
}

export default ToDoItems
