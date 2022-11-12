import React from "react";
// reactstrap components
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://instagram.com/nemanja_petrovic5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://nemanjapetrovic.me"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </li>
              
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made {" "}
              <i className="fa fa-heart heart" /> by Nemanja Petrovic
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;