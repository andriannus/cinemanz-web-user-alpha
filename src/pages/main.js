import React from 'react';
import loadable from '@loadable/component';

import MainRoutes from 'pages/main.routes';

const LoadableNavbar = loadable(() => {
  return import('shared/components/navbar');
});

const Main = () => {
  return (
    <section className="section">
      <LoadableNavbar />

      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <MainRoutes />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
