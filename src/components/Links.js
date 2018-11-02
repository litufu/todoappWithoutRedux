import React from 'react'
import FilterLink from './FilterLink'

const Links = ({filter,handleClickLink})=>(
  <p>
    show:
    <FilterLink filter="SHOW_ALL" propfilter={filter}
    handleClick={handleClickLink}>ALL</FilterLink>
    <span> ,  </span>
    <FilterLink filter="SHOW_COMPLETE" propfilter={filter}
    handleClick={handleClickLink}>COMPLETE</FilterLink>
    <span> ,  </span>
    <FilterLink filter="SHOW_ACTIVE" propfilter={filter}
    handleClick={handleClickLink}>ACTIVE</FilterLink>
  </p>
)

export default  Links
