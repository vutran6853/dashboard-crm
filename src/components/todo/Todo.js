import React, { useState } from 'react'
import { connect } from 'react-redux'
import { todoListAction, markTaskCompleteAction, addNewTodoItemAction } from '../../duck/todoReducer'
import './todo.scss'

function Todo(props) {
  let [newTodoItem, setNewTodoItem] = useState({
    id: '',
    task: '',
    date: ''
  })
  // console.log(props.todo)

  let handleMarkCheckBox = (e, id) => {
    props.markTaskCompleteAction(e.target.checked, id)
  }

  let handleAddNewItemToList = () => {
    if (newTodoItem.task !== '' && newTodoItem.date !== '') {
      props.addNewTodoItemAction(newTodoItem)
      handleRestState()
    }
    return null
  }

  let handleSelectDate = (e) => {
    console.log(e.target.value);
  }

  let handleAddNewItem = (e) => {
    // console.log(e.target.name)
    setNewTodoItem({
      ...newTodoItem,
      id: parseFloat(Math.random().toPrecision(3)),
      [e.target.name]: e.target.value
    })
  }

  let handleRestState = () => {
    setNewTodoItem({
      id: '',
      task: '',
      date: ''
    })
  }

  let renderTodoList = props.todo.todoList.map((value, index) => {
    // console.log(`value[${index}] =`, value)
    return (
      <ul key={ value.id }>
        <li style={{textDecoration: value.complete ? "line-through" : "none" }}>{ index + 1 }: { value.task }</li>
        <li>{ value.date }</li>
        <input type="checkbox" placeholder="s" onClick={ (e) => handleMarkCheckBox(e, value.id) }/>
      </ul>
    )
  })

  return (
    <div className="todo_container">
      <div className="todo_add_item">
        <input type="text" name="task" onChange={ (e) => handleAddNewItem(e) } />
        <input type="date" name="date" onChange={ (e) => handleAddNewItem(e) } />
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