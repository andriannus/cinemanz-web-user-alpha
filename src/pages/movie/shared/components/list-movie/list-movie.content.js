import React from 'react';

import { URL_IMAGE_ERROR } from 'pages/movie/shared/constants/movie.constant';

const Content = ({ paginatedMovie }) => {
  return (
    <div className="columns is-multiline">
      {paginatedMovie.data.map(movie => {
        return (
          <div key={movie.id} className="column is-one-third has-text-centered">
            <Poster name={movie.title} src={movie.poster} />

            <h2 className="subtitle has-text-weight-bold">{movie.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

const Poster = ({ name, src }) => {
  if (!src) {
    return <img src={URL_IMAGE_ERROR} alt={name} />;
  }

  return (
    <img src={src} alt={name} onError={e => (e.target.src = URL_IMAGE_ERROR)} />
  );
};

export default Content;
