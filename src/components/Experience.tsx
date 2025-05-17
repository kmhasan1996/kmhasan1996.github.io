import { Container, Row, Col, Card } from "react-bootstrap"

const experiences = [
  {
    title: "Sr. Software Engineer",
    company: "Technology and Business Solutions Ltd.",
    period: "Jan 2023 - Present",
    duration: calculateDuration('Jan 2023'),
    responsibilities: [
      "Analyze system requirements and prioritize tasks",
      "Write clean, testable code using .NET programming languages",
      "Develop technical specifications and architecture",
      "Review and refactor code",
      "Deploy fully functional applications",
      "Support junior developers in their work",
      "Document development and operational procedures",
      "Research and implement new technologies and features",
    ],
  },
  {
    title: "Software Engineer",
    company: "Technology and Business Solutions Ltd.",
    period: "May 2020 - Dec 2022",
    duration: "2 Years 8 Months",
    responsibilities: [
      "Work with internal teams to design & develop new applications from scratch",
      "Maintain & add new feature/functionalities to existing software",
      "Implement both front-end and back-end for smooth performing web application",
      "Writing clean, readable, reusable code with proper commenting/summary",
      "Work in a team and able to work under pressure",
      "Evaluate and identify new technologies for implementation",
    ],
  },
  {
    title: "Intern Software Engineer",
    company: "Technology and Business Solutions Ltd.",
    period: "Mar 2020 - Apr 2020",
    duration: "2 Months",
    responsibilities: [
      "Observe and learn software developing process",
      "Challenged with different types of front-end design and programming tasks",
      "Add new features and functionalities to existing software",
    ],
  },
]

function calculateDuration(startPeriod: string): string {
  const [monthStr, yearStr] = startPeriod.split(" ");
  const startDate = new Date(`${monthStr} 1, ${yearStr}`);
  const now = new Date();

  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  months = months % 12;

  const yearLabel = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
  const monthLabel = months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "";

  return [yearLabel, monthLabel].filter(Boolean).join(" ");
}


function Experience() {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-7 fw-bold mb-1">Work Experience</h2>
         <div className="mx-auto" style={{ height: "4px", width: "80px", backgroundColor: "var(--bs-primary)" }}></div>
        
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-4 border-0 shadow-sm">
              <Card.Body className="p-4">
                <Row>
                  <Col lg={12}>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                      <div>
                        <h3 className="fs-4 fw-semibold mb-1">{exp.title}</h3>
                        <div className="text-muted">{exp.company}</div>
                      </div>
                      <div className="d-flex align-items-center mt-2 mt-md-0">
                        <i className="bi bi-calendar3 me-2 text-muted"></i>
                        <span className="text-muted">
                          {exp.period} ({exp.duration})
                        </span>
                      </div>
                    </div>

                    <h4 className="fs-5 fw-medium mb-3">Responsibilities:</h4>
                    <ul className="text-muted">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="mb-2">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience
