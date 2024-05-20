import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
