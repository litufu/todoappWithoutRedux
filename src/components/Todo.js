import React from 'react'

export default class Todo extends React.Component{
  render(){
    const {text,completed,handleClickTodo} = this.props
    return(
      <li
      onClick = {handleClickTodo}
      style={{textDecoration:completed?"line-through":"none"}}
      >
      {text}
      </li>

    );
  }
}
