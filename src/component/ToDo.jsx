import React, { useRef, useState } from "react"
import { RiCalendarTodoFill } from "react-icons/ri"
import ToDoItems from "./ToDoItems"

const ToDo = () => {
  const inputRef = useRef(null)

  const [task, setTask] = useState([])
  const [input, setInput] = useState("")
  console.log("input", input)
  const AddTasks = () => {
    if (input.trim()) {
      setTask((prev) => [...prev, input.trim()])
      setInput("")
      inputRef.current.focus()
    }

    console.log("task", task)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      AddTasks(); // Call AddTasks when Enter is pressed
    }
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* --title-- */}
      <div className="flex items-center mt-7 gap-2 ">
        <RiCalendarTodoFill className="text-3xl " />
        <h1 className="text-3xl font-semibold ">To-Do List</h1>
      </div>

      {/* --input button-- */}

      <div className="flex items-center mt-2 py-7 bg-gray-200 max-h-7 rounded-full">
        <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}  onKeyDown={handleKeyDown} className="bg-transparent border-0 outline-none flex-1  pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add your Tasks" />
        <button onClick={AddTasks} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">
          Add +
        </button>
      </div>

      {/* --todo list-- */}
      {task.map((task, index) => {
        return <ToDoItems key={index} text={task} />
      })}
    </div>
  )
}

export default ToDo
