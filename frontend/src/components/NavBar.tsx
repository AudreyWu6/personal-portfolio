import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import { HashLink } from 'react-router-hash-link';

export const NavBar: React.FC = () => {

  const [activeLink, setActiveLink] = useState<'home' | 'skills' | 'projects'>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: 'home' | 'skills' | 'projects') => {
    setActiveLink(value);
  };

  const [isRotating, setIsRotating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRotating(true); // Start rotation
    setTimeout(() => setIsRotating(false), 1000); // Stop rotation after 1 second
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/" className="logo-container">
          {/* Rotating Logo SVG */}
          <div className={`logo-svg ${isRotating ? "rotate" : ""}`} onClick={handleClick}>
            <svg className="logo-icon" viewBox="0 0 24 24">
              <mask id="mask" width="24" height="24" x="0" y="0" data-masktype="alpha">
                <rect width="24" height="24" fill="#fff" rx="3" />
              </mask>
              <g mask="url(#mask)">
                <path className="fill-purple" d="M0 0h24v24H0z" />
                <path className="fill-pink" d="M0 24h24V0C-8 0 32 24 0 24" />
              </g>
            </svg>
          </div>

          <span className="logo-text">
            <span className="sr-only sm:not-sr-only">Audrey Wu</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={HashLink} 
              to="#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              to="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              to="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://linkedin.com/in/audrey-wu-7720711a0" target="_blank" rel="noopener noreferrer">
              <img src={navIcon1} alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/AudreyWu6" target="_blank" rel="noopener noreferrer">
              <img src={navIcon2} alt="GitHub Icon" />
            </a>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}