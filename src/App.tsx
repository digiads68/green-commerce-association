import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Activities from './components/Activities'
import CaseStudies from './components/CaseStudies'
import News from './components/News'
import Partnership from './components/Partnership'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Activities />
        <CaseStudies />
        <News />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
