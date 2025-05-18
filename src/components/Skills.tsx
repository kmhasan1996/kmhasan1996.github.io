import { Container, Row, Col, Card, Badge } from "react-bootstrap"

const skillCategories = [
  {
    title: "Backend Technologies",
    icon: <i className="bi bi-server fs-4"></i>,
    skills: ["ASP.NET", "ASP.NET Core", "LINQ", "Entity Framework", "Entity Framework Core"],
  },
  {
    title: "Frontend Technologies",
    icon: <i className="bi bi-layout-text-window fs-4"></i>,
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
  },
  {
    title: "Database",
    icon: <i className="bi bi-database fs-4"></i>,
    skills: ["MS SQL", "MySQL", "Store Procedures", "Views", "Triggers", "Functions"],
  },
  {
    title: "Development Practices",
    icon: <i className="bi bi-code-slash fs-4"></i>,
    skills: ["SOLID Design Principles", "Software Design Patterns", "MVC", "Repository Pattern", "Singleton Pattern"],
  },
  {
    title: "Version Control & Tools",
    icon: <i className="bi bi-git fs-4"></i>,
    skills: ["Git", "SVN", "Trello", "ice Scrum"],
  },
  {
    title: "Methodologies",
    icon: <i className="bi bi-diagram-3 fs-4"></i>,
    skills: ["Agile/Scrum", "Waterfall"],
  },
  {
    title: "Server & Deployment",
    icon: <i className="bi bi-hdd-stack fs-4"></i>,
    skills: ["Microsoft Windows Server", "IIS", "AWS S3 Storage"],
  },
  {
    title: "Other Skills",
    icon: <i className="bi bi-file-earmark-code fs-4"></i>,
    skills: ["Restful Web API", "RDLC Report", "Crystal Report", "iTEXT Sharp", "Windows Services/Scheduler"],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-7 fw-bold mb-1">Skills & Expertise</h2>
          <div className="mx-auto" style={{ height: "4px", width: "80px", backgroundColor: "var(--bs-primary)" }}></div>
        
        </div>
        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay={index * 50}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-primary me-2">{category.icon}</div>
                    <h3 className="fs-5 fw-semibold mb-0">{category.title}</h3>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} bg="light" text="dark" className="mb-1">
                        {skill}
                      </Badge>
                    ))}
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

export default Skills
