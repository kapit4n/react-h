import { combineReducers } from 'redux';
import { REQUEST_ROOMS, RECEIVE_ROOMS, REQUEST_HOME, RECEIVE_HOME, } from '../actions'

const rooms = (state = [], action) => {
  switch (action.type) {
    case REQUEST_ROOMS:
      return {
        ...state,
        isFetching: true,
        rooms: []
      };
    case RECEIVE_ROOMS:
      return {
        ...state,
        isFetching: false,
        rooms: action.rooms
      }
    default:
      return state;
  }
}

const home = (state = { isFetching: false, rooms: [] }, action) => {
  switch (action.type) {
    case REQUEST_HOME:
      return {
        ...state,
        isFetching: true,
        rooms: [],
      };
    case RECEIVE_HOME:
      return {
        ...state,
        isFetching: true,
        rooms: action.rooms,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  rooms,
  home,
});

export default rootReducer;