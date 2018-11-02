import React from 'react'
import Link from './Link'


export default class FilterLink extends  React.Component{
  render(){
    const active = this.props.propfilter === this.props.filter
    return(
      <Link
      active={active}
      onClick={()=>this.props.handleClick(this.props.filter)}
      >
      {this.props.children}
      </Link>
    )
  }
}
