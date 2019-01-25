import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import * as Actions from '../actions'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  //auth,
  events
})

const mapIncomingEvents = (events) => {
  return events.map(event => ({...event, opened: false}))
}

const openEvent = (id, events) => {
  return events.map(event => ({...event, opened: event.id === id ? !event.opened : false}))
}

const events = (state = {pending: true, list: []}, action) => {
  switch (action.type) {
    case Actions.OPEN_EVENT:
      const {events} = state
      return {
        ...state,
        list: openEvent(action.id, state.list)
      }
    case Actions.TRY_FETCH_EVENTS:
      return {
        ...state,
        pending: true,
      }
    case Actions.FETCH_EVENTS_SUCCEEDED:
      return {
        ...state,
        pending: false,
        list: mapIncomingEvents(action.events)
      }
    case Actions.FETCH_EVENTS_FAILED:
      return {
        ...state,
        pending: false,
        list: []
      }
    default:
      return state
  }
}

/*
const auth = (state = {pending: false}, action) => {
  switch (action.type) {
    case Actions.TRY_LOGIN:
      return {
        pending: true
      }
    case Actions.FAILED_LOGIN:
      return {
        pending: false
      }
    case Actions.SUCCESSFUL_LOGIN:
      return {
        pending: false
      }
    default:
      return state
  }
}*/

export default createRootReducer
