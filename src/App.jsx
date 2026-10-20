import React, { lazy, Suspense, useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

const Scene = lazy(() => import('./components/Scene.jsx'))

export default function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer>
        {/* <span className="mono">© {new Date().getFullYear()} Sanu Kumar</span> */}
        <a className="mono" href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}
