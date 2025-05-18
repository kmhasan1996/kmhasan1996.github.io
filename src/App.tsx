"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { HashRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import FloatingWhatsApp from "./components/FloatingWhatsApp"

// Import AOS
// @ts-ignore
import AOS from "aos"
import "aos/dist/aos.css"

// Create Theme Context
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
})

// Theme Provider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) return savedTheme
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark"
      }
    }
    return "light"
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    document.body.setAttribute("data-bs-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export function useTheme() {
  return useContext(ThemeContext)
}

function App() {
   // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    })
  }, [])
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Hero />
           <About />
             <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
            <FloatingWhatsApp />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
 // "scripts": {
  //   "start": "react-scripts start",
  //   "build": "react-scripts build",
  //   "test": "react-scripts test",
  //   "eject": "react-scripts eject"
  // },