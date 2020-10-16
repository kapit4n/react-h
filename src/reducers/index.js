import { combineReducers } from 'redux';
import { REQUEST_ROOMS, RECEIVE_ROOMS } from '../actions'

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

const rootReducer = combineReducers({
  rooms,
});

export default rootReducer;