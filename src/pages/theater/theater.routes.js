import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const LoadableList = loadable(() => {
  return import('pages/theater/list');
});

const LoadableDetail = loadable(() => {
  return import('pages/theater/detail');
});

const TheaterRoutes = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}/`} component={LoadableList} />
      <Route exact path={`${match.url}/:id`} component={LoadableDetail} />
    </Switch>
  );
};

export default withRouter(TheaterRoutes);
