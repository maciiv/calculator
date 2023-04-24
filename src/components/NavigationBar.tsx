import { FunctionComponent } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../assets/react.svg"

const NavigationBar: FunctionComponent = function () {

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/calculator/square">Square</Nav.Link>
                            <Nav.Link href="/calculator/triangle">Triangle</Nav.Link>
                            <Nav.Link href="/calculator/trapezoid">Trapezoid</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
      </>
    )
}

export default NavigationBar