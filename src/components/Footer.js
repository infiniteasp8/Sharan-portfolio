import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/header-img.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="infinite-footer" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/infiniteasp8/"><img src={navIcon1} alt="Linkdin profile" /></a>
                <a target="_blank" href="https://github.com/infiniteasp8"><img src={navIcon2} alt="Portfolio profile" /></a>
            </div>
            <p className="textinf">Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
