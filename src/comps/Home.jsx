import React, { useState } from "react";
import RoomsService from "../services/RoomsService";
import { Card, Button, Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RoomBox(props) {
  const isBusy = props.room.isBusy;
  const room = props.room;

  const squareStyle = {
    height: "100px",
    width: "100px",
    backgroundColor: "#ccffc4",
    display: "inline-block",
    margin: 5,
    fontSize: 12
  };

  const squareBusyStyle = {
    height: "100px",
    width: "100px",
    backgroundColor: "#f48c89",
    display: "inline-block",
    margin: 5,
    fontSize: 12
  };

  if (isBusy) {
    return (
      <Card style={squareBusyStyle}>
        <div>{room.id}</div>
        <div>{room.name}</div>
        <div>
          {room.user}
          <br />
          <Button size="sm" variant="danger"><FontAwesomeIcon icon="user-times" /></Button>
        </div>
      </Card>
    );
  } else {
    return (
      <Card style={squareStyle}>
        <div>{room.id}</div>
        <div>{room.name}</div>
        <div>
          Free
          <br />
          <Button size="sm"><FontAwesomeIcon icon="user-plus" /></Button>
        </div>
      </Card>
    );
  }
}

function LevelBox(props) {
  const level = props.level;

  return (
    <div>
      <div>{level.name}</div>
      <div>
        {level.rooms.map(r => (
          <RoomBox room={r} key={r.id} />
        ))}
      </div>
    </div>
  );
}

function RoomCalendar(props) {
  return <div>Calendar view</div>;
}

function CalendarBox(props) {
  const level = props.level;

  return (
    <div>
      <div>{level.name}</div>
      <div>
        {level.rooms.map(r => (
          <RoomCalendar room={r} key={r.id} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const dateToday = new Date().toDateString();

  const [levelList, setlevelList] = useState(RoomsService.getRoomsUsers());

  const [isColorView, setIsColorView] = useState(false);

  return (
    <Jumbotron>
      <div>
        <div>
          <Button>Calendar View</Button>
          <Button>Color View</Button>
        </div>
        <div>
          {dateToday}
          <div
            style={{
              backgroundColor: "#ccffc4",
              width: "50px",
              display: "inline-block"
            }}
          >
            free
          </div>
          <div
            style={{
              backgroundColor: "#f48c89",
              width: "50px",
              display: "inline-block"
            }}
          >
            busy
          </div>
        </div>
      </div>
      {isColorView
        ? levelList.map(l => <LevelBox level={l} key={l.id} />)
        : levelList.map(l => <LevelBox level={l} key={l.id} />)}
    </Jumbotron>
  );
}
