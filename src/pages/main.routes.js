import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const LoadableLanding = loadable(() => {
  return import('pages/landing');
});

const LoadableMovie = loadable(() => {
  return import('pages/movie');
});

const LoadableTheater = loadable(() => {
  return import('pages/theater');
});

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoadableLanding} />
      <Route path="/movie" component={LoadableMovie} />
      <Route exact path="/theater" component={LoadableTheater} />
    </Switch>
  );
};

export default withRouter(MainRoutes);
