import axios from "axios"

const ADDLIST = 'ADDLIST'
const ADDPRICE = 'ADDPRICE'
const ADDBOTH = 'ADDBOTH'
const GETCONTACTS = 'GETCONTACTS'

const initialState = {
  selectItem: ['', 'Drink', 'Food', 'Gas', 'Book', 'Etc'],
  item: '',
  price: 0,
  contactsList: []
}

function getContactsList() {
  console.log('hit getContactsList')
  return {
    type: GETCONTACTS,
    payload: axios.get('/api/contacts')
  }
}

function setSelect(passValue) {
  return {
    type: ADDLIST,
    payload: passValue
  }
}

function setPrice(passValue) {
  return {
    type: ADDPRICE,
    payload: passValue
  }
}

function setBoth(name, passValue) {
  return {
    type: ADDBOTH,
    payload: [name, passValue]
  }
}

function crmReducer(state = initialState, action) {
  // console.log('action', action.payload)
  switch(action.type) {
    case `${ ADDLIST }_FULFILLED`:
      return {
        ...state,
        item: action.payload
      }
    case `${ ADDPRICE }_FULFILLED`:
      return {
        ...state,
        price: action.payload
      }
    case ADDBOTH:
      return {
        ...state,
        [action.payload[0]]: action.payload[1]
      }
    case `${ GETCONTACTS }_FULFILLED`:
      return {
        ...state,
        contactsList: action.payload.data
      }
    default:
      return state
  }
}

export default crmReducer

export {
  getContactsList,
  setSelect,
  setPrice,
  setBoth
}