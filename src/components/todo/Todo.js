import React, { useState } from 'react'
import { connect } from 'react-redux'
import { todoListAction, markTaskCompleteAction, addNewTodoItemAction } from '../../duck/todoReducer'
import './todo.scss'

function Todo(props) {
  let [newTodoItem, setNewTodoItem] = useState({
    task: '',
    id: '',
  })
  console.log(props.todo)

  let handleMarkCheckBox = (e, id) => {
    props.markTaskCompleteAction(e.target.checked, id)
  }

  let handleAddNewItemToList = () => {
    if (newTodoItem.task !== '') {
      props.addNewTodoItemAction(newTodoItem)
      handleRestState()
    }
    return null
  }

  let handleAddNewItem = (e) => {
    console.log(e.target.value)
    setNewTodoItem({
      id: parseFloat(Math.random().toPrecision(3)),
      task: e.target.value,
    })
  }

  let handleRestState = () => {
    setNewTodoItem({
      task: '',
      id: '',
    })
  }

  let renderTodoList = props.todo.todoList.map((value, index) => {
    // console.log(`value[${index}] =`, value)
    return (
      <ul key={ value.id }>
        <li style={{textDecoration: value.complete ? "line-through" : "none" }}>{ index + 1 }: { value.task }</li>
        <input type="checkbox" placeholder="s" onClick={ (e) => handleMarkCheckBox(e, value.id) }/>
      </ul>
    )
  })

  return (
    <div className="todo_container">
      <div className="todo_add_item">
        <input type="text" value={ newTodoItem.task } onChange={ (e) => handleAddNewItem(e) } />
        <button type="submit" onClick={ handleAddNewItemToList }>Add</button>
      </div>

      <div className="todo_list_container">
        { renderTodoList }
      </div>
    </div>
  )
}

function mapPropsToState(state) {
  return state
}

export default connect(mapPropsToState, { todoListAction, markTaskCompleteAction, addNewTodoItemAction })(Todo)