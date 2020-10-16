import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { fetchRooms } from './actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React Hotel"
    };
    console.log('this.props');
    console.log(this.props);
  }

  componentDidMount() {
    this.props.dispatch(fetchRooms())
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

const mapStateToProps = state => {
  const { rooms } = state;
  return {
    rooms
  }
}

export default connect(mapStateToProps)(App);