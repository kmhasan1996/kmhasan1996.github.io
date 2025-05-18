"use client"

import { useState } from "react"
import "./FloatingWhatsApp.css"

function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  // Format phone number for WhatsApp link (remove spaces and special characters)
  const whatsappNumber = "+8801749796054".replace(/\s+/g, "").replace(/[+]/g, "")
  const whatsappMessage = "Hello from your portfolio website!"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="floating-whatsapp-container">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp floating-whatsapp-icon"></i>
        {isHovered && <span className="floating-whatsapp-tooltip">Chat on WhatsApp</span>}
      </a>
    </div>
  )
}

export default FloatingWhatsApp
