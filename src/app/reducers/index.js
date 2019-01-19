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
};

export default createRootReducer
