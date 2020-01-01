import React from 'react';

import ListMovieContent from 'pages/movie/shared/components/list-movie/list-movie.content';

const ListMovie = ({ paginatedMovie }) => {
  return <ListMovieContent paginatedMovie={paginatedMovie} />;
};

export default ListMovie;
