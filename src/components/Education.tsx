import { Container, Row, Col, Card } from "react-bootstrap"

const educations = [
  {
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "United International University (UIU)",
    location: "Dhaka",
    year: "2019",
  },
  {
    degree: "Higher Secondary Certificate (H.S.C)",
    institution: "Rajshahi Govt. City College",
    location: "Rajshahi",
    year: "2013",
  },
]

const trainings = [
  {
    course: "Web Application Development - Dot Net",
    institution: "BASIS Institute of Technology & Management (BITM)",
    location: "Dhaka",
    period: "Sep 2019 - Dec 2019",
  },
  {
    course: "Web Design & Development",
    institution: "Center for Development of IT Professionals (CDIP)",
    location: "Dhaka",
    period: "May 2017 - Dec 2017",
  },
]

function Education() {
  return (
    <section id="education" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-7 fw-bold mb-1">Education & Training</h2>
         <div className="mx-auto" style={{ height: "4px", width: "80px", backgroundColor: "var(--bs-primary)" }}></div>
        
        </div>

        <Row className="g-4">
          <Col lg={6}>
            <h3 className="fs-4 fw-semibold mb-4">
              <i className="bi bi-mortarboard-fill me-2 text-primary"></i>
              Education
            </h3>

            <div className="d-flex flex-column gap-4">
              {educations.map((edu, index) => (
                <Card key={index} className="border-0 shadow-sm" data-aos="fade-right" data-aos-delay={index * 50}>
                  <Card.Body className="p-4">
                    <h4 className="fs-5 fw-semibold mb-3">{edu.degree}</h4>
                    <div className="text-muted">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-award me-2"></i>
                        <span>{edu.institution}</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-geo-alt me-2"></i>
                        <span>{edu.location}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-calendar3 me-2"></i>
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          <Col lg={6}>
            <h3 className="fs-4 fw-semibold mb-4">
              <i className="bi bi-award-fill me-2 text-primary"></i>
              Training
            </h3>

            <div className="d-flex flex-column gap-4">
              {trainings.map((training, index) => (
                <Card key={index} className="border-0 shadow-sm" data-aos="fade-left" data-aos-delay={index * 50}>
                  <Card.Body className="p-4">
                    <h4 className="fs-5 fw-semibold mb-3">{training.course}</h4>
                    <div className="text-muted">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-award me-2"></i>
                        <span>{training.institution}</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-geo-alt me-2"></i>
                        <span>{training.location}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-calendar3 me-2"></i>
                        <span>{training.period}</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Education
