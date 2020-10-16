import axios from 'axios';
export const REQUEST_ROOMS = 'REQUEST_ROOMS';
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const REQUEST_HOME = 'REQUEST_HOME';
export const RECEIVE_HOME = 'RECEIVE_HOME';

export const requestRooms = () => ({
  type: REQUEST_ROOMS
});

export const receiveRooms = (rooms) => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const requestHome = () => ({
  type: REQUEST_HOME
});

export const receiveHome = (rooms) => ({
  type: RECEIVE_HOME,
  rooms
});

export const fetchRooms = () => dispatch => {
  dispatch(requestRooms());
  return axios.get(`${process.env.REACT_APP_API_URL}/rooms`).then(data => {
    console.log(data);
    console.log(data);
    console.log(data);
    console.log(data);
    dispatch(receiveRooms(data.data));
  });
}

export const fetchHome = () => dispatch => {
  dispatch(requestHome());
  return axios.get(`${process.env.REACT_APP_API_URL}/rooms`).then(data => {
    console.log(data);
    dispatch(receiveHome(data.data.data));
  });
}