import React from "react"
import ToDo from "./component/ToDo"
import TodoList from "./component/ToDoList"

const App = () => {
  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">
      <ToDo />
      {/* <TodoList /> */}
    </div>
  )
}

export default App
