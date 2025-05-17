import { Container, Row, Col, Card, Badge } from "react-bootstrap"

const projects = [
  {
    title: "Learning Management System (LMS)",
    description:
      "Developed a training platform for the sales force, enabling employees to complete assigned courses within a defined timeline, take exams, and automatically generate certificates. The platform also includes additional functionalities.",
    technologies: [
      "ASP.NET Core 8.0",
      "AWS S3 Storage",
      "MSSQL",
      "Entity Framework Core 8.0",
      "LINQ",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
    url: null,
  },
  {
    title: "FinCoachBD",
    description:
      "Apply Instantly for Loan, SME Loan & Credit Card from Anywhere to Your Desired Bangladeshi Bank Anytime.",
    technologies: [
      "ASP.NET Core 5.0",
      "MySQL",
      "Entity Framework Core 5.0",
      "LINQ",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
    url: "https://fincoachbd.com",
  },
  {
    title: "Electronics Tracking Activity (eTRAC)",
    description:
      "This project is a Web application and an automation system which has features to manage an activity with doctors and organization for conference on business purpose topics.",
    technologies: ["ASP.NET", "MSSQL", "Entity Framework", "LINQ", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    url: null,
  },
  {
    title: "Electronics Purchase Requisition Management (ePRM)",
    description:
      "ePRM is a web application for managing Purchase Requisition with auto generated approver with approval flow.",
    technologies: ["ASP.NET", "MSSQL", "Entity Framework", "LINQ", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    url: null,
  },
  {
    title: "Expensya",
    description:
      "Expensya is a web-based application for claiming daily expense of a company's field worker through proper system with approval flow.",
    technologies: [
      "ASP.NET",
      "AWS S3 Storage",
      "Microsoft SQL Server",
      "Entity Framework",
      "LINQ",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
    url: null,
  },
  {
    title: "FinPac",
    description:
      "FinPac is a centralized web-based ERP application which includes Financial Accounting, Asset Accounting, Procurement & Purchase, Inventory/Material Management, Sales and Distribution and Management Accounting modules.",
    technologies: [
      "ASP.NET",
      ".NET Web API",
      "Microsoft SQL Server",
      "Entity Framework",
      "LINQ",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
    url: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-7 fw-bold mb-1">Recent Projects</h2>
          <div className="mx-auto" style={{ height: "4px", width: "80px", backgroundColor: "var(--bs-primary)" }}></div>
        
        </div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h3 className="fs-5 fw-semibold">{project.title}</h3>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-link p-0">
                        <i className="bi bi-globe"></i>
                      </a>
                    )}
                  </div>
                  <p className="text-muted mb-4 flex-grow-1 text-justify">{project.description}</p>
                  <div className="border-top pt-3">
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} bg="light" text="dark" className="mb-1">
                          {tech}
                        </Badge>
                      ))}
                      {/* {project.technologies.length > 5 && (
                        <Badge bg="secondary">+{project.technologies.length - 5} more</Badge>
                      )} */}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects
