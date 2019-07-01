import React, { useState } from "react";
import { Card, Button, Jumbotron, Modal } from "react-bootstrap";
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
      <>
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
        </Card>
        <RemoveBookModal show={removeModalShow} room={room}
          onHide={removeModalClose} onSave={removeBookingSave}></RemoveBookModal>
      </>
    );
  } else {
    return (
      <>
        <Card className="square-free">
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
        </Card>
        <BookModal show={modalShow} room={room}
          onHide={modalClose} onSave={modalSave}></BookModal>
      </>

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
    <>
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

    </>

  );
}
