import axios from "axios"

const LOGIN_IN = 'LOGIN_IN'
const SIGN_UP = 'SIGN_UP'
const EMAIL = 'EMAIL'
const RESET_STATE = 'RESET_STATE'

const initialState = {
  userID: '0',
  username: '',
  userEmail: '',
  authBool: false,
  errorBool: null,
  successBool: null,
  errorMessage: 'Unable to find username or incorrent passowrd',
  successMessage: 'Success update',
  failMessage: 'Unable to update.Try again'
}

function restartStateAction() {
  return {
    type: RESET_STATE,
    payload: null
  }
}

function signUpAction(passValue) {
  return {
    type: SIGN_UP,
    payload: axios.post('/api/register', { passValue })
  }
}

function loginInAction(passValue) {
  return {
    type: LOGIN_IN,
    payload: axios.post('/api/login', { passValue })
  }
}

function updateEmailAction(passValue) {
  return {
    type: EMAIL,
    payload: axios.put(`/api/update/email`, passValue)
  }
}

function updatePasswordAction(passValue) {
  return {
    type: EMAIL,
    payload: axios.put(`/api/update/password`, passValue)
  }
}


function authReducer(state = initialState, action) {
  switch(action.type) {
    case `${SIGN_UP}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data[0].users_username,
        userID: action.payload.data[0].users_id,
        authBool: true
      }

    case `${LOGIN_IN}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data[0].users_username,
        userID: action.payload.data[0].users_id,
        authBool: true
      }

    case `${LOGIN_IN}_REJECTED`:
      return {
        ...state,
        authBool: false
      }

    case `${EMAIL}_FULFILLED`:
      return {
        ...state,
        successBool: true
      }

    case `${EMAIL}_REJECTED`:
      return {
        ...state,
        errorBool: true
      }
    
    case RESET_STATE:
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
  restartStateAction,
  signUpAction,
  loginInAction,
  updateEmailAction,
  updatePasswordAction
}