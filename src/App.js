import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import RegistroUsuario from './components/RegistroUsuario';
import InicioSesionUsuario from './components/InicioSesionUsuario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App">
          <Menu />
          <div>
            <Route path="/registro" element={<RegistroUsuario />} />
            <Route path="/inicio-sesion" element={<InicioSesionUsuario />} />
          </div>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;