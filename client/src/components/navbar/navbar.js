import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Nav.module.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    let location = useLocation();
    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }
    useEffect(() => {
        const temp = localStorage.getItem('token')
        setToken(temp)
    }, [location])
    return (
        <Navbar bg="light" expand='lg' collapseOnSelect className={styles.navbar}>
            <Container fluid className='px-sm-0 mx-sm-4'>
                <Navbar.Brand href='/'>
                    <Image src='/logo192.png' alt='' width='35' height='35' className='me-3' />
                    My Job Portal
                </Navbar.Brand>
                {token && <>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                        <Nav className={styles.nav}>
                            <Nav.Link href="/jobs">Jobs</Nav.Link>
                            <NavDropdown title="Me" id="basic-nav-dropdown" align='end'>
                                <NavDropdown.Item href="/my-profile">My Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/profile-settings">Profile Settings</NavDropdown.Item>
                                <NavDropdown.Item href="/public-profile">Edit Public Profile</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </>}
            </Container>

        </Navbar>
    )
}


export default NavBar