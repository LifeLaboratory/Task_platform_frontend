import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import * as Actions from '../actions'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth
})


const auth = (state = {pending:false}, action) => {
  switch(action.type){
    case Actions.TRY_LOGIN:
      return {
        pending:  true
      }
    case Actions.FAILED_LOGIN:
      return {
        pending:  false
      }
    case Actions.SUCCESSFUL_LOGIN:
      return {
        pending:  false
      }
    default:
      return state
  }
}

const eventsList = (state = {pending:false}, action) => {
  switch(action.type){
    case Actions.GET_EVENTS:
      return {
        pending:  true
      }
    case Actions.FAILED_GET_EVENTS:
      return {
        pending:  false
      }
    default:
      return state
  }
}

const registration = (state = {pending: false}, action) => {
  switch(action.type){
    case Actions.TRY_REGISTRATION:
    return{
      pending: true
    }
    case Actions.SUCCESSFULL_REGISTRATION:
      return{
        pending: false
      }
    case Actions.FAILED_REGISTRATION:
        return state
    default:
      return state
  }
}
export default createRootReducer
