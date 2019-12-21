import axios from 'axios'

const PRICE = 'PRICE'
const ITEM = 'ITEM'
const PURCHASE_DATE = ' PURCHASE_DATE'
const RESTART = 'RESTART'
const POSTTODB = 'POSTTODB'

const initialState = {
  price: 0,
  item: '',
  purchaseDate: '',
  selectItem: ['', 'Drink', 'Food', 'Gas', 'Book', 'Etc']
}

function setPurchaseDateAction(passValue) {
  return {
    type: PURCHASE_DATE,
    payload: passValue
  }
}

function setSpendPriceAction(passValue) {
  return {
    type: PRICE,
    payload: passValue
  }
}

function setSpendItemAction(passValue) {
  return {
    type: ITEM,
    payload: passValue
  }
}

function setResetStateAction() {
  return {
    type: RESTART
  }
}

function postToDBAction(passValue) {
  return {
    type: POSTTODB,
    payload: axios.post('http://localhost:3020/api/spend/daily', passValue)
  }
}

function spendReducer(state = initialState, action) {
  switch (action.type) {
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
    case PURCHASE_DATE:
      return {
        ...state,
        purchaseDate: action.payload
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

export { 
  setPurchaseDateAction, 
  setSpendPriceAction, 
  setSpendItemAction, 
  setResetStateAction, 
  postToDBAction 
}

