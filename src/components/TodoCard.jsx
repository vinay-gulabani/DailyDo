import React from 'react';

function TodoCard(props) {
  const {children, handleDeleteTodos, index, handleEditTodos} = props
  return (
    
    <li className='todoItem'>
      {children}
      <div className="actionsContainer"></div>
      <button onClick={() =>{
        handleDeleteTodos(index)
      }}>
       <i className="fa-regular fa-trash-can"></i>
       </button>
       <button onClick={()=>{
        handleEditTodos(index)
       }}>
       <i className="fa-solid fa-pen-to-square"></i>
       </button>
       
    
    </li>
  );
}
export default TodoCard
