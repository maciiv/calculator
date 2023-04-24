import { FunctionComponent } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../assets/react.svg"
import { Link } from "react-router-dom";

const NavigationBar: FunctionComponent = function () {

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/" className="navbar-brand">
                        <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Link to="/square" className="nav-link">Square</Link>
                            <Link to="/triangle" className="nav-link">Triangle</Link>
                            <Link to="/trapezoid" className="nav-link">Trapezoid</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
      </>
    )
}

export default NavigationBar