import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/myself.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';

export const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const [index, setIndex] = useState<number>(1);
  const toRotate: string[] = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period: number = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i: number = loopNum % toRotate.length;
    let fullText: string = toRotate[i];
    let updatedText: string = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period / 2);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
      setDelta(100); 
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>

                <div className="text-layers">
                  <p className="layer pink-layer">Hi! I'm Audrey</p>
                  <p className="layer white-layer">Hi! I'm Audrey</p>
                  <p className="layer purple-layer">Hi! I'm Audrey</p>
                </div>

                <h1>
                  {` I'm `} 
                  <span 
                    className="txt-rotate" 
                    data-period="1000" 
                    data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p>I'm a full stack software engineer passionate about creating performant and fun software that enables users to do more with less.</p>
                <HashLink to="#connect" className="no-underline">
                  <button>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </HashLink>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}