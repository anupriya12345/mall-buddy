import { Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BookTable from './BookTable.js'
import Alert from 'react-bootstrap/Alert';



import '../styles.css'

const Navigationbar = () => {

  const [showDrops, setShowDrops] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log(showAlert);
  }, [showAlert])
  const showDropdown = (e) => {
    setShowDrops(!showDrops);
  }
  const hideDropdown = e => {
    setShowDrops(false);

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const saveChanges = () => {
    setShow(false);
    setShowAlert(true);


  }
  const handleShow = () => setShow(true);




  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" className="m-1 px-2" sticky="top">
        <Navbar.Brand>
          <img className="logoImg me-2" src={require('../images/logo.png')} width="5%" />

          <span className="title"> Mall-Buddy</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="me-4">
          <Nav className="me-4">
            <NavLink eventKey="1" as={Link} to="/">HOME</NavLink>
            <NavLink eventKey="2" as={Link} to="/cities">CITIES</NavLink>
            <NavDropdown title="SHOPPING MALLS"
              id="collasible-nav-dropdown"
              show={showDrops}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item eventKey="3.1" as={Link} to="/berlin_malls">BERLIN</NavDropdown.Item>
              <NavDropdown.Item eventKey="3.2" as={Link} to="/munich_malls">MUNICH</NavDropdown.Item>
              <NavDropdown.Item eventKey="3.3" as={Link} to="/frankfurt_malls">FRANKFURT</NavDropdown.Item>
              <NavDropdown.Item eventKey="3.4" as={Link} to="/hamburg_malls">HAMBURG</NavDropdown.Item>
              <NavDropdown.Item eventKey="3.5" as={Link} to="/cologne_malls">COLOGNE</NavDropdown.Item>

            </NavDropdown>
            <NavLink eventKey="4" as={Link} to="/shops">SHOPS</NavLink>


          </Nav>
          <button className='btn btn1' onClick={handleShow}>BOOK NOW</button>
        </Navbar.Collapse>
      </Navbar>


      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Book A Table of your favourite restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookTable />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges} >
            Book Table
          </Button>
        </Modal.Footer>
      </Modal>
      {showAlert && <Alert className=" top-0 end-0" key="success" variant="success" dismissible>
        Congrats.. Your Table booked !!
      </Alert>}
    </>

  );
}

export default Navigationbar;