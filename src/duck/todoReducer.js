const TODO_LIST = 'TODO_LIST'
const MARK_TASK_COMPLETE = 'MARK_TASK_COMPLETE'
const ADD_NEW_TODO = 'ADD_NEW_TODO' 

const initialState = {
  todoList: [
    {id: 0, task: 'clean room', complete: false},
    {id: 1, task: 'buy shoe', complete: false},
    {id: 2, task: 'pay bill', complete: false},
    {id: 3, task: 'relex', complete: false}
  ]
}

function todoListAction() {
  // console.log('enter action')
  return {
    type: TODO_LIST,
  }
}

function markTaskCompleteAction(passBool, passID) {
  // console.log({ passBool, passID })
  return {
    type: MARK_TASK_COMPLETE,
    payload: { passBool, passID }
  }
}

function addNewTodoItemAction(passObj) {
  console.log({passObj})
  return {
    type: ADD_NEW_TODO,
    payload: passObj
  }
}

function todoReducer(state = initialState, action) {
  console.log('enter reducer', action.payload)
  // state.todoList.push({
  //   id: 10,
  //   task: 'hello world',
  //   complete: false
  // })
  switch(action.type) {
    case TODO_LIST:
      return {
        ...state
      }
    case MARK_TASK_COMPLETE:
      return {
        ...state,
        todoList: state.todoList.map((value, index) => {
         if (value.id === action.payload.passID) {
           value.complete = action.payload.passBool
           return value
         } else {
           return value
         }
        })
      }
    case ADD_NEW_TODO:
      return {
        ...state,
        todoList: [...state.todoList, {
          id: action.payload.id,
          task: action.payload.task,
          complete: false
        }]
      }
    default:
      return state
  }
}

export default todoReducer

export {
  todoListAction,
  markTaskCompleteAction,
  addNewTodoItemAction
}