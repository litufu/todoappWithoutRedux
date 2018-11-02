import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,handleClickTodo})=>(
  <ul>
    {todos.map((t)=>(
      <Todo
      key={t.id}
      text={t.text}
      completed={t.completed}
      handleClickTodo={()=>handleClickTodo(t.id)}
      />)
    )}
  </ul>
)

export default TodoList
