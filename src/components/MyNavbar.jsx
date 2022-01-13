import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Strivebooks</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/registration">Register</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default MyNavbar