import axios from 'axios'

const FETCH_FAKE_USER_DATA = 'FETCH_FAKE_USER_DATA'
const FETCH = 'FETCH'
const USER_SELECT_TYPE = 'USER_SELECT_TYPE'
const USER_FETCH_TYPE = 'USER_FETCH_TYPE'
const USER_CLEAR_UTITESDATA = 'USER_CLEAR_UTITESDATA'
const USER_SELECT_YEAR = 'USER_SELECT_YEAR'
const USER_FITLER_UTITESDATA = 'USER_FITLER_UTITESDATA'
const USER_FETCH_TYPE2 = 'USER_FETCH_TYPE2'
const USER_SELECT_GRAPHIC_TYPE ='USER_SELECT_GRAPHIC_TYPE'

const initalState = {
  data1: [],
  allNameType: ['all', 'Gas', 'Drink', 'Book', 'Food'],
  gas: [],
  drink: [],
  book: [],
  food: [],
  utitesLabel: ['---', 'overall', 'Water', 'Gas', 'Internet', 'Electri'],
  monthName: ['---', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  grapicType: ['---', 'Bar', 'Line', 'Table'],
  userSelectType: '---',
  userSelectYear: '---',
  userSelectGrapicType: '---',
  userUtitesData: [],
  userUtitesFilterData:[],
  userUtitesAllData: []
}

function fetchUserInfo(passValue) {
  return {
    type: FETCH,
    payload: axios.get(`/api/graphic/${passValue}`)
  }
}

function fetchFakeUserInfoAction() {
  return {
    type: FETCH_FAKE_USER_DATA,
    payload: axios.get('/api/graphic/0')
  }
}

function setUserSelectTypeAction(passValue) {
  return {
    type: USER_SELECT_TYPE,
    payload: passValue
  }
}

function setUserSelectYearAction(passValue) {
  return {
    type: USER_SELECT_YEAR,
    payload: passValue
  }
}

function setUserSelectGraphicTypeAction(passValue) {
  return {
    type: USER_SELECT_GRAPHIC_TYPE,
    payload: passValue
  }
}

function resetUserUtitesDataAction() {
  return {
    type: USER_CLEAR_UTITESDATA,
    payload: []
  }
}

function fetchSelectTypeAction() {
  return {
    type: USER_FETCH_TYPE,
    payload: axios.get(`/api/house/history/utitles/overall/1/`)
  }
}

function fetchSelectType2Action() {
  return {
    type: USER_FETCH_TYPE2,
    payload: axios.get(`/api/house/history/utitles/all/1/`)
  }
}

// const setUserSelectTypeAction = (passValue) => ({
//   type: USERSELECTTYPE,
//   payload: passValue
// })

function filterUserUtitesDataAction(passValue) {
  console.log('hit filterUserUtitesDataAction', passValue)
  return {
    type: USER_FITLER_UTITESDATA,
    payload: passValue
  }

}


function grapicReducer(state = initalState, action) {
  switch(action.type) {
    case `${ FETCH }_FULFILLED`:
      return {
        ...state,
        data1: action.payload.data,
        gas: action.payload.data.filter((value) => value.item === 'Gas'),
        drink: action.payload.data.filter((value) => value.item === 'Drink'),
        book: action.payload.data.filter((value) => value.item === 'Book')
      }

    case USER_SELECT_TYPE:
      return {
        ...state,
        userSelectType: action.payload
      }

    case USER_SELECT_YEAR:
      return {
        ...state,
        userSelectYear: action.payload
      }

    case USER_SELECT_GRAPHIC_TYPE:
      return {
        ...state,
        userSelectGrapicType: action.payload
      }

    case `${ USER_FETCH_TYPE }_FULFILLED`:
      return {
        ...state,
        userUtitesData: action.payload.data,
        userUtitesFilterData: action.payload.data
      }

    case USER_CLEAR_UTITESDATA:
      return {
        ...state,
        userUtitesData: action.payload,
        userUtitesFilterData: action.payload,
        userUtitesAllData: action.payload,
        userSelectType: '---',
        userSelectYear: '---',
        userSelectGrapicType: '---'
      }

    case USER_FITLER_UTITESDATA:
      return {
        ...state,
        userUtitesFilterData: state.userUtitesData.filter((value) => value.date.includes(action.payload))
      }

    case `${ USER_FETCH_TYPE2 }_FULFILLED`:
      return {
        ...state,
        userUtitesAllData: action.payload.data
      }

    case `${ FETCH_FAKE_USER_DATA }_FULFILLED`:
        return {
          ...state,
          data1: action.payload.data,
          gas: action.payload.data.filter((value) => value.item === 'Gas'),
          drink: action.payload.data.filter((value) => value.item === 'Drink'),
          book: action.payload.data.filter((value) => value.item === 'Book')
        }
  
    default: 
      return state
  }
}

export default grapicReducer

export {
  fetchUserInfo,
  fetchFakeUserInfoAction,
  setUserSelectTypeAction,
  fetchSelectTypeAction,
  resetUserUtitesDataAction,
  setUserSelectYearAction,
  filterUserUtitesDataAction,
  fetchSelectType2Action,
  setUserSelectGraphicTypeAction
}