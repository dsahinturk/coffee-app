import { Col, Container, Row } from "react-bootstrap";
import Nav from "../Nav/Nav";
import {} from './Layout.scss';

const Layout = ({ children }) => {
    return (
        <Container fluid>
            <Row>
                <Col className="nav-container" xs={12} md={3}><Nav /></Col>
                <Col className="content-container" xs={12} md={9}>{children}</Col>
            </Row>
        </Container>
    );
}

export default Layout;