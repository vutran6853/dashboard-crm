import axios from "axios";

const LOGININ = 'LOGININ'

const initialState = {
  username: null
}

export function sigin(passValue) {
  console.log('hit sigin()', passValue)
  return {
    type: LOGININ,
    payload: axios.put('/api/login', { passValue })
  }
}


function loginReducer(state = initialState, action) {
  console.log('hit loginReducer')
  switch(action.type) {
    default:
      return state
  }
}

export default loginReducer

