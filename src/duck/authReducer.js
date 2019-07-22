import axios from "axios"

const LOGININ = 'LOGININ'
const SIGNUP = 'SIGNUP'

const initialState = {
  username: '',
  userID: '',
  bool: false,
  error: null
}

export function signUp(passValue) {
  return {
    type: SIGNUP,
    payload: axios.post('/api/register', { passValue })
  }
}

export function loginIn(passValue) {
  return {
    type: LOGININ,
    payload: axios.post('/api/login', { passValue })
  }
}


function authReducer(state = initialState, action) {
  switch(action.type) {
    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data[0].users_username,
        userID: action.payload.data[0].users_id
      }

    case `${LOGININ}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data[0].users_username,
        userID: action.payload.data[0].users_id
      }

    case `${LOGININ}_REJECTED`:
      console.log('hit LOGININ_REJECTED ')

    default:
      return state
  }
}

export default authReducer

