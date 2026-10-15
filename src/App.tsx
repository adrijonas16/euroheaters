import { useScrollReveal } from './hooks/useScrollReveal'
import { useNavbarScroll } from './hooks/useNavbarScroll'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Specs } from './components/Specs'
import { Benefits } from './components/Benefits'
import { SeriesSection } from './components/SeriesSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  useScrollReveal()
  useNavbarScroll()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Specs />
        <Benefits />
        <SeriesSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
