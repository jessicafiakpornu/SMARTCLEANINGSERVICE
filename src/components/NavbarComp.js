import React from "react";
// import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaRegTimesCircle} from 'react-icons/fa'
// import {MdCleaningServices} from 'react-icons/md'
// import { click } from "@testing-library/user-event/dist/click";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from "react-bootstrap";
// import './Navbar.css'

const NavbarComp = () => {    
     
    
    return (
    <Navbar bg="info" variant={"light"} expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">SMART CLEANING SERVICES</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
                <NavDropdown title="Services" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Cleaning</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Disinfection</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Fumigation
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
  </Navbar>
    )
}

export default NavbarComp