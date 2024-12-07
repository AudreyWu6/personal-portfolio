import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/github.png';
import { MadeWithLove } from "./MadeWithLove";


export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4} className="text-center text-sm-start">
            <img src={logo} alt="Logo" />
          </Col>

          <Col size={12} sm={4} className="made-with-love-container">
            <MadeWithLove />
          </Col>

          <Col size={12} sm={4} className="text-center text-sm-end" style={{ paddingTop: '25px' }}>
            <div className="social-icon">

               <a href="https://linkedin.com/in/audrey-wu-7720711a0" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/AudreyWu6" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
