import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import myLogo from "../Images/NEWRAD.png";

import { Link, useNavigate   } from "react-router-dom";
import Login from "./Login";

export default function Header(props) {
  const {searchValue, setSearchValue}= props
  const navigate = useNavigate();
  function handleSearch(input) {
    setSearchValue(input)
  }

  function handleButtonClick(e) {
    e.preventDefault();
    
    navigate("/recall")
  };

  

  const [query, setQuery] = useState("");

  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Link to={"/"}>
            <Navbar.Brand href="#">
              <h3>
              {/* Recall */}
              </h3>
              <img
                src={myLogo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                bg="dark"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Link to={"Login"}> 
              <Nav.Link href="#action2">LogIn</Nav.Link>
              </Link> */}

              <Link to={"SignUp"}> 
              <Nav.Link href="#action2"><h4>LogIn/SignUp</h4></Nav.Link>
              </Link>
              <Link to={"entryForm"}>
              <Nav.Link href="#action1"><h4>Entry Form</h4></Nav.Link>
              </Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            
          </Navbar.Collapse>
          <form className="d-flex ms-auto me-1"
            >
            <input
              onChange={e=>handleSearch(e.target.value)}
              value={searchValue}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search-input"
            />
            
            <button
                onClick={handleButtonClick}
              className="btn btn-outline-light"
              type="submit"
              id="search-button"
            >
              Search
            </button>
            
          </form>{" "}
        </Container>
      </Navbar>
    </div>
  );
}
