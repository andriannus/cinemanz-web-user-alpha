import React, { useContext } from 'react';

import MovieContext from 'pages/movie/shared/services/movie.context';
import { URL_IMAGE_ERROR } from 'pages/movie/shared/constants/movie.constant';

import Pagination from 'shared/components/pagination';

export const Content = () => {
  const {
    handlePrevPage,
    handleNextPage,
    isLoading,
    paginatedData,
  } = useContext(MovieContext);

  return (
    <>
      <nav className="level">
        <div className="level-item has-text-centered">
          <p className="title">Now Playing</p>
        </div>
      </nav>

      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <ListNowPlaying />

          <Pagination
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            meta={paginatedData.meta}
          />
        </>
      )}
    </>
  );
};

const ListNowPlaying = () => {
  const { paginatedData } = useContext(MovieContext);

  return (
    <div className="columns is-multiline">
      {paginatedData.data.map(movie => {
        return (
          <div key={movie.id} className="column is-one-third has-text-centered">
            <NowPlayingImage name={movie.title} src={movie.poster} />

            <h2 className="subtitle has-text-weight-bold">{movie.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

const NowPlayingImage = ({ title, src }) => {
  if (!src) {
    return <img src={URL_IMAGE_ERROR} alt={title} />;
  }

  return (
    <img
      src={src}
      alt={title}
      onError={e => (e.target.src = URL_IMAGE_ERROR)}
    />
  );
};

export default Content;
