import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Inicio from './Componentes/Inicio'
import Footer from './Componentes/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tabla from './Componentes/Tabla'

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto">
              <Link className="nav-link" to="/Inicio">Inicio</Link>
              <Link className="nav-link" to="/Tabla">Tabla</Link>
            </ul>
          </div>
        </nav>
        {/* definicion de rutas para paginas */}
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
        </Routes>
        <Routes>
          <Route path="/Tabla" element={<Tabla />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
