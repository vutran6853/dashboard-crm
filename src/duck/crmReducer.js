import axios from "axios"

const ADD_LIST = 'ADD_LIST'
const ADDPRICE = 'ADDPRICE'
const ADDBOTH = 'ADDBOTH'
const GETCONTACTS = 'GETCONTACTS'

const initialState = {
  selectItem: ['', 'Drink', 'Food', 'Gas', 'Book', 'Etc'],
  item: '',
  price: 0,
  contactsList: []
}

function getContactsListAction() {
  console.log('hit getContactsListAction')
  return {
    type: GETCONTACTS,
    payload: axios.get('/api/contacts')
  }
}

function setSelectAction(passValue) {
  return {
    type: ADD_LIST,
    payload: passValue
  }
}

function setPriceAction(passValue) {
  return {
    type: ADDPRICE,
    payload: passValue
  }
}

function setBothAction(name, passValue) {
  return {
    type: ADDBOTH,
    payload: [name, passValue]
  }
}

function crmReducer(state = initialState, action) {
  switch(action.type) {
    case `${ ADD_LIST }_FULFILLED`:
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
  getContactsListAction,
  setSelectAction,
  setPriceAction,
  setBothAction
}