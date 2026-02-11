// import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-neutral-100">
        <Home />
        <About />
        <Skills />
        <Projects/>
        <Contacts/>
      </main>
      <Footer />
    </>
  )
}

export default App
