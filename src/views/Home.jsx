import React, { useState } from "react";
import { Card, Button, Jumbotron, Modal, Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import RoomsService from "../services/RoomsService";
import styles from './Home.css'

function RemoveBookModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Remove Booking on {props.room.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> Are you sure to remove the booking for user {props.room.user}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>NO</Button>
        <Button variant="primary" onClick={props.onSave}>YES</Button>
      </Modal.Footer>
    </Modal>
  );
}


function BookModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book on {props.room.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            userId: '',
            startDate: '',
            endDate: ''
          }}
          validationSchema={Yup.object().shape({
            userId: Yup.number()
              .required('User is required'),
            startDate: Yup.date()
              .required('Start Date is required'),
            endDate: Yup.string()
              .required('End Date is required')
          })}
          onSubmit={fields => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
            props.onSave();
          }}
          render={({ errors, status, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="userId">User</label>
                <Field name="userId" component="select" className={'form-control' + (errors.userId && touched.userId ? ' is-invalid' : '')}>
                  <option value={0}>Select a User</option>
                  <option value={1}>Luis Arce</option>
                  <option value={2}>Juan Arce</option>
                  <option value={3}>Hansel Arce</option>
                </Field>
                <ErrorMessage name="userId" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <Field name="startDate" type="date" className={'form-control' + (errors.startDate && touched.startDate ? ' is-invalid' : '')} />
                <ErrorMessage name="startDate" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">endDate</label>
                <Field name="endDate" type="date" className={'form-control' + (errors.endDate && touched.endDate ? ' is-invalid' : '')} />
                <ErrorMessage name="endDate" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">Register</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
              </div>
            </Form>
          )}
        />
      </Modal.Body>
    </Modal>
  )
}

function RoomBox(props) {
  console.log(props.room);
  const isBusy = props.room.isBusy;
  const room = props.room;
  const [modalShow, setModalShow] = useState(false);
  const [removeModalShow, setRemoveModalShow] = useState(false);

  let modalClose = () => setModalShow(false);
  let removeModalClose = () => setRemoveModalShow(false);

  let modalSave = () => setModalShow(false);
  let removeBookingSave = () => setRemoveModalShow(false);

  if (isBusy) {
    return (
      <div className="col-md-6 col-lg-4 col-sm-12">
        <Card className="square-busy">
          <div>{room.id}</div>
          <div>{room.name}</div>
          <div>
            {room.user}
            <br />
            <Button size="sm"
              variant="danger"
              onClick={() => setRemoveModalShow(true)}
            ><FontAwesomeIcon icon="user-times" /></Button>
          </div>
          <div>
            {room.bookings.map(x => <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.2rem' }}>
              <div style={{ paddingTop: '0.8rem', marginRight: '1rem' }}>
                [{x.startDate.toLocaleDateString("en-US")} to {x.endDate.toLocaleDateString("en-US")}]: {x.user}
              </div>
              <Button size="sm">x</Button>
            </div>)}
          </div>
        </Card>
        <RemoveBookModal show={removeModalShow} room={room}
          onHide={removeModalClose} onSave={removeBookingSave}></RemoveBookModal>
      </div>
    );
  } else {
    return (
      <div className="col-md-6 col-lg-4 col-sm-12">
        <Card className="square-free" >
          <div>{room.id}</div>
          <div>{room.name}</div>
          <div>
            Free
          <br />
            <Button size="sm"
              variant="primary"
              onClick={() => setModalShow(true)}
            ><FontAwesomeIcon icon="user-plus" /></Button>
          </div>
        </Card >
        <BookModal show={modalShow} room={room} onHide={modalClose} onSave={modalSave}></BookModal>
      </div >
    );
  }
}

function LevelBox(props) {
  const level = props.level;
  const filter = props.filter;

  return (
    <div style={{ display: '100%' }}>
      <div>{level.name}</div>
      <div className="row">
        {level.rooms.filter(x => x.name.toLowerCase().includes(props.searchText.toLowerCase()) && (filter === 'all' || (filter === 'reserved' && x.bookings.length > 0) || (filter === 'free' && x.bookings.length === 0))).map(r => (
          <RoomBox room={Object.assign({}, r, { isBusy: r.bookings.length > 0 })} key={r.id} filter={filter} />
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

function Reserved({ levelList, searchText }) {
  return levelList.filter(x => x.name).map(l => <LevelBox level={l} key={l.id} filter="reserved" searchText={searchText} />)
}

function Free({ levelList, searchText }) {
  return levelList.filter(x => x.name).map(l => <LevelBox level={l} key={l.id} filter="free" searchText={searchText} />)
}

function All({ levelList, searchText }) {
  return levelList.filter(x => x.name).map(l => <LevelBox level={l} key={l.id} filter="all" searchText={searchText} />)
}

export default function Home() {
  const dateToday = new Date().toDateString();

  const [levelList, setlevelList] = useState(RoomsService.getRoomsUsers());

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div>
        <div>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', margin: '0.5rem' }}>
            <input type="text" value={searchText} onChange={x => setSearchText(x.target.value)} /><button>Search</button>
          </div>
          <Tabs defautActiveKey="all">
            <Tab eventKey="all" title="All">
              <All levelList={levelList} searchText={searchText} />
            </Tab>
            <Tab eventKey="reserved" title="Reserved">
              <Reserved levelList={levelList} searchText={searchText} />
            </Tab>
            <Tab eventKey="free" title="Free">
              <Free levelList={levelList} searchText={searchText} />
            </Tab>
          </Tabs>
        </div>
        <div>
          {dateToday}
        </div>
      </div>
    </>

  );
}
