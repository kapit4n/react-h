import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import RoomView from './src/comps/rooms/RoomView';
import RoomList from './src/comps/rooms/RoomList';
import RoomAdd from './src/comps/rooms/RoomAdd';
import RoomEdit from './src/comps/rooms/RoomEdit';
import Home from './src/comps/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Link to="/rooms">rooms</Link>   | 
        <Link to="/rooms-add">add</Link>  | 
        <Link to="/rooms-edit">edit</Link> | 
        <Link to="/rooms-info/1">info</Link> | 
        
      </div>
    );
  }
}


const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/rooms" component={RoomList} />
      <Route path="/rooms-add" component={RoomAdd} />
      <Route path="/rooms-edit" component={RoomEdit} />
      <Route path="/rooms-info/:id" component={RoomView} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
