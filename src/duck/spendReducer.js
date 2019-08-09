import axios from "axios";

const PRICE = 'PRICE'
const ITEM = 'ITEM'
const PURCHASEDATE = ' PURCHASEDATE'
const RESTART = 'RESTART'
const POSTTODB = 'POSTTODB'

const initialState = {
  price: 0,
  item: '',
  purchaseDate: '',
  selectItem: ['', 'Drink', 'Food', 'Gas', 'Book', 'Etc']
}

export function setPurchaseDate(passValue) {
  return {
    type: PURCHASEDATE,
    payload: passValue
  }
}

export function setSpendPrice(passValue) {
  return {
    type: PRICE,
    payload: passValue
  }
}

export function setSpendItem(passValue) {
  return {
    type: ITEM,
    payload: passValue
  }
}

export function setResetState() {
  return {
    type: RESTART
  }
}

export function postToDB(passValue) {
  return {
    type: POSTTODB,
    payload: axios.post('http://localhost:3020/api/spend/daily', passValue)
  }
}

function spendReducer(state = initialState, action) {
  switch(action.type) {
    case PRICE: 
      return {
        ...state,
        price: action.payload
      }
    case ITEM: 
      return {
        ...state,
        item: action.payload
      }
    case PURCHASEDATE: 
      return {
        ...state,
        purchaseDate : action.payload
      }
    case RESTART:
      return {
        price: 0,
        item: '',
        purchaseDate: '',
        selectItem: ['', 'Drink', 'Food', 'Gas', 'Book', 'Etc']      
      }
    default:
      return state
  }
} 


export default spendReducer