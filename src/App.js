import React from 'react';
import Cadastro from './Cadastro';
import CadastroList from './CadastroList';
import CadastroDetail from './CadastroDetail';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
          <ul>
            <li><Link to="/">Lista</Link></li>
            <li><Link to="/cadastrar">Cadastro</Link></li>
          </ul>
          <Switch>
            <Route exact key="lista" path="/" component={CadastroList} />
            <Route exact key="cadastrar" path="/cadastrar" component={Cadastro} />
            <Route exact key="cadastro" path="/:id" component={CadastroDetail} />
          </Switch>
      </div>
    </Router>
  )
}

export default App;
