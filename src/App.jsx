import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Certificate from './page/Certificate'
import Project from './page/Project'
import Skills from './page/Skills'
import { BackgroundBeams } from './components/BackgroundBeams'

function App() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <BackgroundBeams />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/certificate' element={<Certificate />} />
        <Route path='/project' element={<Project />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App
