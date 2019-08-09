import axios from 'axios'

const FETCH = 'FETCH'
const SAVE = 'SAVE'
const DELETES = 'DELETES'
const EDIT = 'EDIT'

const initalState = {
  data1: [],
  allNameType: ['all', 'Gas', 'Drink', 'Book', 'Food']
}


export const fetchUserInfo = (passValue) => {
  console.log('enter passValue = ', passValue)
  return {
    type: FETCH,
    payload: axios.get(`api/graphic/${passValue}`)
  }
}

function grapicReducer(state = initalState, action) {
  switch(action.type) {
    case `${FETCH}_FULFILLED`:
      console.log('enter fetchhh', action.payload.data)
      return {
        ...state,
        data1: action.payload.data
      }
    
    
    default: 
      return state
  }
}

export default grapicReducer