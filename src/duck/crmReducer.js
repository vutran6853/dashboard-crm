const ADDLIST = 'ADDLIST'
const ADDPRICE = 'ADDPRICE'
const ADDBOTH = 'ADDBOTH'

const initialState = {
  selectItem: ['', 'Drink', 'Food', 'Gas', 'Book', 'Etc'],
  item: '',
  price: 0,
}

export function setSelect(passValue) {
  return {
    type: ADDLIST,
    payload: passValue
  }
}

export function setPrice(passValue) {
  return {
    type: ADDPRICE,
    payload: passValue
  }
}

export function setBoth(name, passValue) {
  return {
    type: ADDBOTH,
    payload: [name, passValue]
  }
}

function crmReducer(state = initialState, action) {
  console.log('action', action.payload)
  switch(action.type) {
    case ADDLIST:
      return {
        ...state,
        item: action.payload
      }
    case ADDPRICE:
      return {
        ...state,
        price: action.payload
      }
    case ADDBOTH:
        return {
          ...state,
          [action.payload[0]]: action.payload[1]
        }
    default:
      return state
  }
}

export default crmReducer
