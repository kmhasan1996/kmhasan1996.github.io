import { Container, Row, Col, Card, Badge } from "react-bootstrap"

function About() {
  return (
    <section id="about" className="py-5 py-md-6 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-7 fw-bold mb-1">About Me</h2>
          <div className="mx-auto" style={{ height: "4px", width: "80px", backgroundColor: "var(--bs-primary)" }}></div>
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="fs-4 fw-semibold mb-4">Career Summary</h3>
                <p className="text-muted mb-4 text-justify">
                  Software Engineer with 5+ years of experience specializing in ASP.NET and ASP.NET Core development.
                  Proven track record in designing and implementing scalable web applications, utilizing full-stack
                  development skills and expertise in database management.
                </p>

                <h3 className="fs-4 fw-semibold mb-3">Professional Highlights</h3>
                <ul className="text-muted ps-4">
                  <li className="mb-2">5+ years of experience in ASP.NET and ASP.NET Core development</li>
                  <li className="mb-2">Expertise in designing and implementing scalable web applications</li>
                  <li className="mb-2">Strong knowledge of database management and ORM frameworks</li>
                  <li className="mb-2">Experience with Agile methodologies and project management tools</li>
                  <li>3+ years of experience working with international clients</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="fs-4 fw-semibold mb-4">Personal Details</h3>
                <div className="d-flex flex-column gap-3">
                  <div>
                    <p className="fw-medium mb-1">Name</p>
                    <p className="text-muted mb-0">Khandokar Mahidy Hasan</p>
                  </div>
                  <div>
                    <p className="fw-medium mb-1">Email</p>
                    <p className="text-muted mb-0">khandokarmahidyhasan@gmail.com</p>
                  </div>
                  <div>
                    <p className="fw-medium mb-1">Location</p>
                    <p className="text-muted mb-0">Dhaka, Bangladesh</p>
                  </div>
                  <div>
                    <p className="fw-medium mb-1">Languages</p>
                    <div className="d-flex flex-wrap gap-2 mt-1">
                      <Badge bg="primary" className="rounded-pill">
                        Bengali
                      </Badge>
                      <Badge bg="primary" className="rounded-pill">
                        English
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
