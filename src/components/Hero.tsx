import { HashLink } from "react-router-hash-link"
import { Container, Row, Col, Button } from "react-bootstrap"

function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center min-vh-100 position-relative">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={8}>
            <div className="mb-4">
              <h1 className="display-4 fw-bold mb-2">Khandokar Mahidy Hasan</h1>
              <h2 className="fs-2 fw-semibold text-primary">.NET Developer</h2>
            </div>

            <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
              Software Engineer with 5+ years of experience specializing in ASP.NET and ASP.NET Core development.
              Building scalable web applications with full-stack development skills.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
               <Button href="https://drive.google.com/file/d/1owuQ1OjMzqrd4A8uinbsKirs0ZDffTX-/view?usp=sharing" 
                variant="primary" size="lg" target="_blank" >
                 <i className="bi bi-download "></i> Download CV
              </Button>
              <Button href="#contact" variant="outline-secondary" size="lg">
                <i className="bi bi-telephone text-primary"></i> Contact Me
              </Button>
              <Button href="#projects" variant="outline-secondary" size="lg">
               <i className="bi bi-list-task text-primary"></i> View Projects
              </Button>
            </div>

            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.linkedin.com/in/kmhasan96/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link p-2"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:khandokarmahidyhasan@gmail.com" className="btn btn-link p-2" aria-label="Email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a
                href="https://github.com/kmhasan1996"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link p-2"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </Col>
        </Row>

        <div className="position-absolute bottom-0 start-50 translate-middle-x d-none d-md-block mb-4 scroll-indicator">
          <HashLink to="#about" className="btn btn-link rounded-circle p-2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </HashLink>
        </div>
      </Container>
    </section>
  )
}

export default Hero
