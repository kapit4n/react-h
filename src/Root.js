import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './containers/Home'
import Rooms from './containers/Rooms'

import { Provider } from 'react-redux';

import App from './App';

function Root({ store }) {

  console.log(store);

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Route path="/" component={App} />
          <Route path="/home" component={Home} />
          <Route path="/rooms" component={Rooms} />
          {/*
          <Route path="/rooms-add" component={RoomManager} />
          <Route path="/rooms-edit/:id" component={RoomManager} />
          <Route path="/rooms-info/:id" component={RoomManager} />

          <Route path="/clients" component={ClientList} />
          <Route path="/clients-add" component={ClientAdd} />
          <Route path="/clients-edit/:id" component={ClientEdit} />
          <Route path="/clients-info/:id" component={ClientView} />

          <Route path="/bookings" component={BookingList} />
          <Route path="/bookings-add" component={BookingAdd} />
          <Route path="/bookings-edit/:id" component={BookingEdit} />
          <Route path="/bookings-info/:id" component={BookingView} /> */}
        </div>
      </Router>
    </Provider>
  )
}

export default Root