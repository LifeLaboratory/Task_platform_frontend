import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth
})


const auth = (state = {}, action) => {
  return {
    ...state,
    authenticated: false,
  }
};

export default createRootReducer
