import './App.css'
import { Routes, Route } from 'react-router-dom'
import LetterGlitch from './components/LetterGlitch'
import ClickSpark from './components/ClickSpark'
import Home from './pages/Home'
import Certificate from './pages/Certificate'
import Skills from './pages/Skills'
import Project from './pages/Project'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <LetterGlitch />

      {/* Konten utama */}
      <div className="relative z-10 bg-primary/60">
        <ClickSpark>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/certificate' element={<Certificate />} />
            <Route path='/project' element={<Project />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </ClickSpark>
      </div>
    </div>
  )
}

export default App
