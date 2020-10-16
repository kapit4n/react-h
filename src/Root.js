import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";

import RoomList from "./views/rooms/RoomList";
import RoomManager from "./views/rooms/RoomManager";

import ClientView from "./views/clients/ClientView";
import ClientList from "./views/clients/ClientList";
import ClientAdd from "./views/clients/ClientAdd";
import ClientEdit from "./views/clients/ClientEdit";
import { Provider } from 'react-redux';

import BookingView from "./views/bookings/BookingView";
import BookingList from "./views/bookings/BookingList";
import BookingAdd from "./views/bookings/BookingAdd";
import BookingEdit from "./views/bookings/BookingEdit";

import Home from "./views/Home";

import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React Hotel"
    };
  }

  render() {
    return (
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Navbar.Brand href="#home">R-Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/home">
              <Nav.Link eventKey={1}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/rooms">
              <Nav.Link eventKey={2}>Rooms</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/clients">
              <Nav.Link eventKey={3}>Clients</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/bookings">
              <Nav.Link eventKey={4}>Bookings</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function Root({ store }) {


  console.log(store);

  return (

    <Provider store={store}>
      <Router>
        <div className="container">
          <Route path="/" component={App} />
          <Route path="/home" component={Home} />
          <Route path="/rooms" component={RoomList} />
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
          <Route path="/bookings-info/:id" component={BookingView} />
        </div>
      </Router>
    </Provider>
  )
}

export default Root