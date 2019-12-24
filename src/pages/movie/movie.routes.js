import React from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const LoadableNowPlaying = loadable(() => {
  return import('pages/movie/now-playing');
});

const LoadableUpcoming = loadable(() => {
  return import('pages/movie/upcoming');
});

const MovieRoutes = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}/`}>
        <Redirect to={`${match.url}/now-playing`} />
      </Route>

      <Route
        exact
        path={`${match.url}/now-playing`}
        component={LoadableNowPlaying}
      />

      <Route
        exact
        path={`${match.url}/upcoming`}
        component={LoadableUpcoming}
      />
    </Switch>
  );
};

export default withRouter(MovieRoutes);
