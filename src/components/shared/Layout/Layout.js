import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../MainFooter/MainFooter";
import Header from "../../MainHeader/MainHeader";
import NavFilter from "../NavFilter/NavFilter";
import {} from './Layout.scss';

const Layout = ({ children }) => {
    return (
        <Container fluid className="layout-container">
            <Row>
                <Col className="nav-container" xs={12} md={3}>
                    <Header />
                    <NavFilter />
                </Col>
                <Col className="content-container" xs={12} md={9}>
                    {children}
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default Layout;