import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import crmReducer from './crmReducer'
import authReducer from './authReducer'
import taskReducer from './taskReducer'
import spendReducer from './spendReducer'
import grapicReducer from './grapicReducer'

// Redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// promisemiddle
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware))

const combineReducer = combineReducers({
  crm: crmReducer,
  auth: authReducer,
  task: taskReducer,
  spend: spendReducer,
  grapic: grapicReducer
})

const store = createStore(combineReducer, middlewares)

export default store