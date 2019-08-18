// Reducer Type
const ADDLIST = 'ADDLIST'
const ADDPRICE = 'ADDPRICE'
const SALE = 'SALE'
const SALEDISCOUNT = 'SALEDISCOUNT'
const TOTAL = 'TOTAL'
const RESETSTATE = 'RESETSTATE'

const initialState = {
  // item: [],
  selectItem: ['', 'Drink', 'Food', 'Gas', 'Book', 'Etc'],
  price: 0,
  item: '',
  sale: 0,
  saleDiscount: 0,
  total: ''
}

function setPrice(passValue) {
  // console.log('hit additem', passValue)
  return {
    type: ADDPRICE,
    payload: passValue
  }
}

function setSale(passValue) {
  return {
    type: SALE,
    payload: passValue
  }
}

function setTotal(passValue) {
  return {
    type: TOTAL,
    payload: passValue
  }
}

function setItem(passValue) {
  return {
    type: ADDLIST,
    payload: passValue
  }
}

function setSaleDiscount(passValue) {
  return {
    type: SALEDISCOUNT,
    payload: passValue
  }
}

function restartState() {
  return {
    type: RESETSTATE,
    payload: null
  }
}

function taskReducer(state = initialState, action) {
  switch(action.type) {
    case ADDPRICE:
      // console.log('hit additem taskReducer')
      return {
        ...state,
        price: action.payload
      }
    case ADDLIST:
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
    case SALEDISCOUNT: 
      return {
        ...state,
        saleDiscount: action.payload
      }
    case RESETSTATE:
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
  setPrice,
  setSale,
  setTotal,
  setItem,
  setSaleDiscount,
  restartState
}