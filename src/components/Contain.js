import React from 'react'
import TodoList from './TodoList'
import Input from './Input'
import Links from './Links'

const getVisibleTodos = (todos,filter)=>{
  switch (filter) {
    case "SHOW_ALL":
      return todos
    case "SHOW_COMPLETE":
      return todos.filter(todo=>todo.completed)
    case "SHOW_ACTIVE":
      return todos.filter(todo=>!todo.completed)
    default:
      return todos
  }
}

export default class Contain extends React.Component{
  state={
    todos:[{id:1,text:"123",completed:false},
    {id:2,text:"add",completed:true}],
    filter:"SHOW_ALL"
  }

  handleClickTodo=(id)=>{
    const {todos} = this.state
    const newTodos = todos.map(todo=>{
      if(todo.id === id){
        return {...todo,completed:!todo.completed}
      }
      return todo
    })
    this.setState(
      {todos:newTodos}
    )
  }

  handleSubmit=text=>{
    const {todos} = this.state
    let nextTodoId = todos.length + 1
    const newTodo = {id:nextTodoId,text:text,completed:false}
    this.setState({
      todos:[...todos,newTodo]
    })
  }

  render(){
    const {todos,filter} = this.state
    const newTodos = getVisibleTodos(todos,filter)
    return(
      <div>
      <Input handleSubmit={this.handleSubmit}/>
        <TodoList
        todos={newTodos}
        handleClickTodo={this.handleClickTodo}
        />
        <Links filter={filter}
         handleClickLink={(filter)=>{
           this.setState({filter:filter})
         }}/>
      </div>
    )
  }

}
