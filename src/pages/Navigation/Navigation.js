import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand='lg'>
                <Container>
                    <Navbar.Brand className='brand'><Link to='/home'><span className="text-danger">MAKE MY TRIP</span></Link></Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/services">Services</Nav.Link>

                            <Nav.Link as={HashLink} to="/teammembers">Members</Nav.Link>
                            <Nav.Link as={HashLink} to="/departments">Departments</Nav.Link>
                            {/* <Nav.Link as={HashLink} to="/registration">Registration</Nav.Link> */}
                            {
                                user?.email ?
                                    <>

                                        <Nav.Link as={HashLink} to="/myorders">My Orders</Nav.Link>
                                        <Nav.Link as={HashLink} to="/manageallorders">Manage All Orders</Nav.Link>
                                        <Nav.Link as={HashLink} to="/addanewservice">Add A New Service</Nav.Link>
                                        <button onClick={logOut} className='btn btn-danger'>Logout</button>
                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        <Navbar.Text>
                            Signed in as : <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;