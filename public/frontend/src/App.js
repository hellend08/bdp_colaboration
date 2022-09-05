import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Gestion from './pages/home-pages/Gestion';
import NuevoProyectoDesarrollo from './pages/home-pages/NuevoProyectoDesarrollo';

const App = () => {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>}>
          <Route path="/Gestion" element={<Gestion/>} />
          <Route path="/Nuevo_Proyecto_Desarrollo" element={<NuevoProyectoDesarrollo/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;