import React from 'react'

const WHATUP = 'WHATUP'
const WHATHAPPEN = 'WHATHAPPEN'

const initialState = {
  dup: ['huh'],
  list: [
    { id: 1, task: 'todo1', complete: 'false' },
    { id: 2, task: 'todo3', complete: 'false' },
    { id: 3, task: 'todo3', complete: 'false' }
  ]
}

function whatupAction(passId) {
  return {
    type: WHATUP,
    payload: passId
  }
}

function testReducer(state, action) {
  console.log('enter testReducer')
  switch (action.type) {
    case WHATUP:
      return {
        ...state,
        list: state.list.filter((value) =>
          value.id === action.payload ? (value.complete = 'true') : (value.complete = 'false')
        )
      }
  }
}

export default testReducer

export { whatupAction, initialState }
