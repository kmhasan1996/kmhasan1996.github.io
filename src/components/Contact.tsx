"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  //const [submitMessage, setSubmitMessage] = useState(null)
  const [submitMessage, setSubmitMessage] = useState<{ type: string; text: string } | null>(null)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitMessage({
      type: "success",
      text: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)

    // Clear message after 5 seconds
    setTimeout(() => {
      setSubmitMessage(null)
    }, 5000)
  }

  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-7 fw-bold mb-1">Contact Me</h2>
         <div className="mx-auto" style={{ height: "4px", width: "80px", backgroundColor: "var(--bs-primary)" }}></div>
        
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group className="mb-3 mb-md-0">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Your your email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitMessage && (
                    <Alert variant={submitMessage.type === "success" ? "success" : "danger"} className="mt-3">
                      {submitMessage.text}
                    </Alert>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="fs-4 fw-semibold mb-4">Contact Information</h3>

                <div className="d-flex flex-column gap-4">
                  <div className="d-flex">
                    <div className=" rounded-circle p-3 me-3">
                      <i className="bi bi-envelope text-primary"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-medium">Email</h4>
                      <a href="mailto:khandokarmahidyhasan@gmail.com" className="text-muted text-decoration-none">
                        khandokarmahidyhasan@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className=" rounded-circle p-3 me-3">
                      <i className="bi bi-telephone text-primary"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-medium">Phone</h4>
                      <a href="tel:+8801749796054" className="text-muted text-decoration-none d-block">
                        +880 1749 79 60 54
                      </a>
                      <a href="tel:+8801811478206" className="text-muted text-decoration-none">
                        +880 1811 47 82 06
                      </a>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className=" rounded-circle p-3 me-3">
                      <i className="bi bi-geo-alt text-primary"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-medium">Location</h4>
                      <p className="text-muted mb-0">
                        House #44, Block-A, Sayed Nagor, Vatara, Natun Bazar, Dhaka-1212
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className=" rounded-circle p-3 me-3">
                      <i className="bi bi-linkedin text-primary"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-medium">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/kmhasan96/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted text-decoration-none"
                      >
                        linkedin.com/in/kmhasan96
                      </a>
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

export default Contact
