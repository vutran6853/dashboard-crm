import React, { Fragment } from 'react'
import { whatupAction } from './testReducer'

function List(props) {
  const { list } = props.data

  const renderList = list.map((value, index) => (
    <Fragment key={ value.id } >
      <ul>
        <li>{ value.id } is  { value.task } is { value.complete } </li>
      </ul>
    </Fragment>
  ))

  return (
    <div>
      <p>List Component</p>
      { renderList }
      <button onClick={ () => props.fn(whatupAction(2))  }>ClickME</button>
    </div>
  )
}

export default List