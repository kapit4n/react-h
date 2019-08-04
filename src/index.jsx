import React, { Component } from "react";
import "./style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import RoomView from "./views/rooms/RoomView";
import RoomList from "./views/rooms/RoomList";
import RoomAdd from "./views/rooms/RoomAdd";
import RoomEdit from "./views/rooms/RoomEdit";

import ClientView from "./views/clients/ClientView";
import ClientList from "./views/clients/ClientList";
import ClientAdd from "./views/clients/ClientAdd";
import ClientEdit from "./views/clients/ClientEdit";

import BookingView from "./views/bookings/BookingView";
import BookingList from "./views/bookings/BookingList";
import BookingAdd from "./views/bookings/BookingAdd";
import BookingEdit from "./views/bookings/BookingEdit";

import Home from "./views/Home";
import * as serviceWorker from "./serviceWorker";

library.add(faUserTimes);
library.add(faUserPlus);
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
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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

const routing = (
  <Router>
    <div class="container">
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/rooms" component={RoomList} />
      <Route path="/rooms-add" component={RoomAdd} />
      <Route path="/rooms-edit/:id" component={RoomEdit} />
      <Route path="/rooms-info/:id" component={RoomView} />

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
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
