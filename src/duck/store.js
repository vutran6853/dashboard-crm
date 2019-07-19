import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import crmReducer from './crmReducer'
import loginReducer from './loginReducer'
import promiseMiddleware from 'redux-promise-middleware'

// Redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// promisemiddle
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware))

const combineReducer = combineReducers({
  crm: crmReducer,
  sign: loginReducer
})

const store = createStore(combineReducer, middlewares)

export default store