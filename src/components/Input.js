import React from 'react'

export default class Input extends React.Component{
  state={text:""}

  handleSubmit = e=>{
    e.preventDefault();
    this.props.handleSubmit(this.state.text)
    this.setState({text:""})
  }
  render(){
    const {text} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={text}
          onChange={e=>this.setState({text:e.target.value})}
          placeholder="ENter you todo!"
        />
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}
