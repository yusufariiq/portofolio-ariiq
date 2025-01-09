import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Certificate from './page/Certificate'
import Project from './page/Project'
import Skills from './page/Skills'

function App() {
  return (
    <>
      {/* <FloatingActionButton/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/certificate' element={<Certificate />} />
        <Route path='/project' element={<Project />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  )
}

export default App
