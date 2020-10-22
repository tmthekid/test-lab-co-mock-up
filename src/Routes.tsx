import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
