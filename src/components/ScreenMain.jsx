import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Componentes de las páginas
import HomePage from './components/HomePage';
import BovinosPage from './components/BovinosPage';
import PorcinosPage from './components/PorcinosPage';

function ScreenMain() {
  return (
    <Router>
      <div className="ganavets-container">
        <header>
          <h1>Bienvenido a Ganavets</h1>
          <p>Tu fuente de información sobre bovinos y porcinos</p>
        </header>
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/bovinos">Bovinos</Link></li>
            <li><Link to="/porcinos">Porcinos</Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/bovinos" component={BovinosPage} />
            <Route path="/porcinos" component={PorcinosPage} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2023 Ganavets - Todos los derechos reservados</p>
        </footer>
      </div>
    </Router>
  );
}

export default ScreenMain;
