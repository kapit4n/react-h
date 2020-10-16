import axios from 'axios';
export const REQUEST_ROOMS = 'REQUEST_ROOMS';
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';

export const requestRooms = () => ({
  type: REQUEST_ROOMS
})

export const receiveRooms = (rooms) => ({
  type: RECEIVE_ROOMS,
  rooms
})

export const fetchRooms = () => dispatch => {
  dispatch(requestRooms());
  return axios.get(`${process.env.REACT_APP_API_URL}/rooms`).then(data => {
    console.log(data)
    return data.data;
  })
}