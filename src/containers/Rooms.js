import React from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../actions';

import RoomList from '../views/rooms/RoomList'

class Rooms extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRooms())
  }
  render() {
    return <RoomList rooms={this.props.rooms} />
  }
};

const mapStateToProps = state => {
  const { rooms } = state;
  return {
    ...rooms
  }
}

export default connect(mapStateToProps)(Rooms);