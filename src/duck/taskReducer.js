// Reducer Type
const ADD_LIST = 'ADD_LIST'
const ADD_PRICE = 'ADD_PRICE'
const SALE = 'SALE'
const SALE_DISCOUNT = 'SALE_DISCOUNT'
const TOTAL = 'TOTAL'
const RESET_STATE = 'RESET_STATE'

const initialState = {
  selectItem: ['', 'Drink', 'Food', 'Gas', 'Book', 'Etc'],
  price: 0,
  item: '',
  sale: 0,
  saleDiscount: 0,
  total: ''
}

function setPriceAction(passValue) {
  return {
    type: ADD_PRICE,
    payload: passValue
  }
}

function setSaleAction(passValue) {
  return {
    type: SALE,
    payload: passValue
  }
}

function setTotalAction(passValue) {
  return {
    type: TOTAL,
    payload: passValue
  }
}

function setItemAction(passValue) {
  return {
    type: ADD_LIST,
    payload: passValue
  }
}

function setSaleDiscountAction(passValue) {
  return {
    type: SALE_DISCOUNT,
    payload: passValue
  }
}

function restartStateAction() {
  return {
    type: RESET_STATE,
    payload: null
  }
}

function taskReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_PRICE:
      return {
        ...state,
        price: action.payload
      }
    case ADD_LIST:
      return {
        ...state,
        item: action.payload
      }
    case SALE:
      return {
        ...state,
        sale: action.payload
      }
    case TOTAL: 
      return {
        ...state,
        total: action.payload
      }
    case SALE_DISCOUNT: 
      return {
        ...state,
        saleDiscount: action.payload
      }
    case RESET_STATE:
      return {
        ...state,
        price: 0,
        total: '',
        sale: 0
      }
    default:
      return state
  }
}

export default taskReducer

export {
  setPriceAction,
  setSaleAction,
  setTotalAction,
  setItemAction,
  setSaleDiscountAction,
  restartStateAction
}