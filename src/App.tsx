import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './components/Home/About'
import Contact from './components/Home/Contact'
import Home from './components/Home/Home'
import Projects from './components/Home/Projects'
import Skills from './components/Home/Skills'

function App() {
  

  return (
    <>

    
      <Header />
      
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact /> 
        </main>
      
      <Footer />
    </>
  )
}

export default App
