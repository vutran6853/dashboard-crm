import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import crmReducer from './crmReducer'
import authReducer from './authReducer'
import promiseMiddleware from 'redux-promise-middleware'

// Redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// promisemiddle
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware))

const combineReducer = combineReducers({
  crm: crmReducer,
  auth: authReducer
})

const store = createStore(combineReducer, middlewares)

export default store