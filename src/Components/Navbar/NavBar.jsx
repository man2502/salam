import { Button } from "bootstrap"
import React from "react"
import { Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import { NavLink } from "react-router-dom"
import s from "./NavBar.module.css"


const NavBar = (props) => {
    return (
        <div className={s.wrapper}>
            <Container fluid>
                <Row>
                    <Col lg={3} md={3} xs={3}>this is logo</Col>
                    <Col lg={6} md={6} xs={6}>
                        <div style={{width:"100%", textAlign:"center"}}>
                           <Navbar expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink to="/profile">Profile</NavLink>
                                    <NavLink to="/contacts">Contacts</NavLink>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    
                                </Form>
                            </Navbar.Collapse>
                        </Navbar> 
                        </div>
                        
                    </Col>
                    <Col lg={3} md={3} xs={3}>user</Col>
                </Row>
            </Container>
        </div>
    )
}


export default NavBar