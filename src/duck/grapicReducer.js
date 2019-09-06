import axios from 'axios'

const FETCH = 'FETCH'
const USER_SELECT_TYPE = 'USER_SELECT_TYPE'
const USER_FETCH_TYPE = 'USER_FETCH_TYPE'
const USER_CLEAR_UTITESDATA = 'USER_CLEAR_UTITESDATA'
const USER_SELECT_YEAR = 'USER_SELECT_YEAR'
const USER_FITLER_UTITESDATA = 'USER_FITLER_UTITESDATA'

const initalState = {
  data1: [],
  allNameType: ['all', 'Gas', 'Drink', 'Book', 'Food'],
  gas: [],
  drink: [],
  book: [],
  food: [],
  utitesLabel: ['---', 'overall', 'Water', 'Gas', 'Internet', 'Electri'],
  monthName: ['---', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  userSelectType: '---',
  userSelectYear: '---',
  userUtitesData: [],
  userUtitesFilterData:[]
}

function fetchUserInfo(passValue) {
  return {
    type: FETCH,
    payload: axios.get(`/api/graphic/${passValue}`)
  }
}

function fetchFakeUserInfo() {
  return {
    type: FETCH,
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

function resetUserUtitesDataAction() {
  return {
    type: USER_CLEAR_UTITESDATA,
    payload: []
  }
}

function fetchSelectTypeAction(state = initalState) {
  return {
    type: USER_FETCH_TYPE,
    payload: axios.get(`/api/house/history/utitles/1/`)
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
        book: action.payload.data.filter((value) => value.item === 'Book'),
        drink: action.payload.data.filter((value) => value.item === 'Drink')
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
        userUtitesFilterData: action.payload
      }

    case USER_FITLER_UTITESDATA:
      return {
        ...state,
        userUtitesFilterData: state.userUtitesData.filter((value) => value.date.includes(action.payload))
      }

    default: 
      return state
  }
}

export default grapicReducer

export {
  fetchUserInfo,
  fetchFakeUserInfo,
  setUserSelectTypeAction,
  fetchSelectTypeAction,
  resetUserUtitesDataAction,
  setUserSelectYearAction,
  filterUserUtitesDataAction
}