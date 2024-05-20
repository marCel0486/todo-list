import React from 'react';

function TodoItem({ todo, index, removeTodo, toggleTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : '' }} className='feitas'>
      {todo.text}
      <button onClick={() => toggleTodo(index)} className='comp'>Completar</button>
      <button onClick={() => removeTodo(index)} className='rem'>Remover</button>
    </li>
  );
}

export default TodoItem;

