import React, { useContext } from 'react';

import ListMovie from 'pages/movie/shared/components/list-movie';
import MovieContext from 'pages/movie/shared/services/movie.context';

import NotFound from 'shared/components/not-found';
import Pagination from 'shared/components/pagination';

export const NowPlayingContent = () => {
  return (
    <>
      <nav className="level">
        <div className="level-item has-text-centered">
          <p className="title">Now Playing</p>
        </div>
      </nav>

      <MovieContent />
    </>
  );
};

const MovieContent = () => {
  const {
    handlePrevPage,
    handleNextPage,
    isLoading,
    paginatedData,
  } = useContext(MovieContext);

  if (isLoading) return 'Loading...';
  if (!paginatedData.data) return <NotFound />;

  return (
    <>
      <ListMovie paginatedMovie={paginatedData} />

      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        meta={paginatedData.meta}
      />
    </>
  );
};

export default NowPlayingContent;
