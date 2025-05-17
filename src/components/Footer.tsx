import { Container } from "react-bootstrap"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-4 bg-light">
      <Container>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex gap-3 mb-3">
            <a
              href="https://www.linkedin.com/in/kmhasan96/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
            >
              LinkedIn
            </a>
            <a href="mailto:khandokarmahidyhasan@gmail.com" className="text-muted">
              Email
            </a>
            <a href="https://github.com/kmhasan1996" target="_blank" rel="noopener noreferrer" className="text-muted">
              GitHub
            </a>
          </div>

          <div className="text-center text-muted small">
            <p className="mb-0">&copy; {currentYear} Khandokar Mahidy Hasan. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
