import React from 'react';
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch} from "react-router-dom";
import rotas from './routes'
const hist = createBrowserHistory();
function App() {
  return (
    <HashRouter history={hist}>
      <Switch>
        {rotas.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} render={() => (
              <prop.component />
            )} />
          );
        })}
      </Switch>
    </HashRouter>
  );
}

export default App;
