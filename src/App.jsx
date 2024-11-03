import React, { useState, useEffect } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])
  const[todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({
      todos : newList
    }))
  }

function handleAddTodos(newTodo){
  const newTodoList = [...todos, newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleDeleteTodos(index){
  const newTodoList = todos.filter((todo, todoIndex)=>{
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleEditTodos(index){
  const valueToBeEdited = todos[index]
  persistData(newTodoList)
  setTodoValue(valueToBeEdited)
  handleDeleteTodos(index)

}

useEffect(()=>{
  if(!localStorage){
    return
  }

  let loaclTodos = localStorage.getItem("todos")
  if(!loaclTodos){
     return
  }

  loaclTodos =JSON.parse(loaclTodos).todos
  setTodos(loaclTodos)
},[])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos = {handleAddTodos} />
      <TodoList handleEditTodos = {handleEditTodos} handleDeleteTodos = {handleDeleteTodos} todos = {todos}/>
    </>
  );
}

export default App;
