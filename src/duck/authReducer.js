import axios from "axios"

const LOGININ = 'LOGININ'
const SIGNUP = 'SIGNUP'
const EMAIL = 'EMAIL'
const RESETSTATE = 'RESETSTATE'

const initialState = {
  userID: '1',
  username: '',
  userEmail: '',
  authBool: true,
  errorBool: null,
  successBool: null,
  errorMessage: 'Unable to find username or incorrent passowrd',
  successMessage: 'Success update',
  failMessage: 'Unable to update.Try again'
}

function restartState() {
  return {
    type: RESETSTATE,
    payload: null
  }
}

function signUp(passValue) {
  return {
    type: SIGNUP,
    payload: axios.post('/api/register', { passValue })
  }
}

function loginIn(passValue) {
  return {
    type: LOGININ,
    payload: axios.post('/api/login', { passValue })
  }
}

function updateEmail(passValue) {
console.log('passValue', passValue)
  return {
    type: EMAIL,
    payload: axios.put(`/api/update/email`, passValue)
  }
}

function updatePassword(passValue) {
  console.log('passValue', passValue)
    return {
      type: EMAIL,
      payload: axios.put(`/api/update/password`, passValue)
    }
  }


function authReducer(state = initialState, action) {
  switch(action.type) {
    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data[0].users_username,
        userID: action.payload.data[0].users_id,
        authBool: true
      }

    case `${LOGININ}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data[0].users_username,
        userID: action.payload.data[0].users_id,
        authBool: true
      }

    case `${LOGININ}_REJECTED`:
      console.log('hit LOGININ_REJECTED ')
      return {
        ...state,
        authBool: false
      }

    case `${EMAIL}_FULFILLED`:
      console.log('hit EMAIL_FULFILLED ')
      return {
        ...state,
        successBool: true
      }

    case `${EMAIL}_REJECTED`:
      return {
        ...state,
        errorBool: true
      }
    
    case RESETSTATE:
      return {
        ...state,
        errorBool: null,
        successBool: null,
      }
    default:
      return state
  }
}



export default authReducer

export {
  restartState,
  signUp,
  loginIn,
  updateEmail,
  updatePassword
}