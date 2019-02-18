import React from 'react';
import Cadastro from './Cadastro';
import CadastroList from './CadastroList';
import CadastroDetail from './CadastroDetail';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export const menu = {
  list: {label: 'Listar', path: '/'},
  create: {label: 'Cadastrar', path: '/cadastrar'}
};

const App = () => {
  return (
    <Router>
      <div>
        <ul className="sidenav">
          <li>
            <Link to={menu.list.path} id={menu.list.label}>
              {menu.list.label}
            </Link>
          </li>
          <li>
            <Link to={menu.create.path} id={menu.create.label}>
              {menu.create.label}
            </Link>
          </li>
        </ul>
        <div className="content">
          <Switch>
            <Route exact key="lista" path="/" component={CadastroList} />
            <Route exact key="cadastrar" path="/cadastrar" component={Cadastro} />
            <Route exact key="cadastro" path="/:id" component={CadastroDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
