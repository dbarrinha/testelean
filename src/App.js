import React from 'react';
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import rotas from './routes'
import Home from './views/Home'
const hist = createBrowserHistory();
function App() {
  return (
    <HashRouter history={hist}>
      <Switch>
        <Route path={'/'} name="Auth" render={() => <Home />} />
        {
          rotas.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} render={() => (
                localStorage.getItem('User@testelean') === null ?
                  (
                    <Redirect to='/' />
                  ) : (
                    <prop.component />
                  )
              )} />
            );
          })
        }
        <Route path={'*'} render={() => <Redirect to='/' />} />
      </Switch>
    </HashRouter >
  );
}

export default App;
