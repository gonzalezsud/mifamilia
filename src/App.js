// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route



import Menu from './components/menu'; // Asegúrate de que menu.js esté dentro de la carpeta 'components'
import RegistroUsuario from './components/RegistroUsuario'; // Asegúrate de que RegistroUsuario.js esté dentro de la carpeta 'components'
import InicioSesionUsuario from './components/InicioSesionUsuario'; // Asegúrate de que InicioSesionUsuario.js esté dentro de la carpeta 'components'

function App() {
  return (
    <Router>
      <Routes>
             <div className="App">
        <Menu />
        <div>
          <Route path="/registro" component={RegistroUsuario} />
          <Route path="/inicio-sesion" component={InicioSesionUsuario} />
        </div>
      </div>
      </Routes>
 
    </Router>
    
  );
}

export default App;

