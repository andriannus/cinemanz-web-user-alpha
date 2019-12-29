import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import NowPlayingContent from 'pages/movie/now-playing/now-playing.content';
import { LIMIT_PER_PAGE } from 'pages/movie/shared/constants/movie.constant';
import MovieContext from 'pages/movie/shared/services/movie.context';

import useGlobalApi from 'shared/services/global-api.hook';
import { getPaginatedData } from 'shared/utilities/paginated-data.utility';

const NowPlaying = () => {
  const history = useHistory();
  const { pathname, search } = useLocation();
  const { baseApi, cancelToken } = useGlobalApi();

  const pageNumber = parseInt(parse(search).page, 10) || 1;
  const skip = (pageNumber - 1) * LIMIT_PER_PAGE;

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const source = cancelToken.source();
    const url = `/movies/now-playing?skip=${skip}&limit=${LIMIT_PER_PAGE}`;

    (async () => {
      try {
        const result = await baseApi.get(url, {
          cancelToken: source.token,
        });

        setMovies(result.data);
        setIsLoading(false);
      } catch (error) {
        setMovies([]);
        setIsLoading(false);
      }
    })();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  const data = {
    data: movies.data,
    page: pageNumber,
    perPage: LIMIT_PER_PAGE,
    total: movies.total,
  };
  const paginatedData = getPaginatedData(data);

  const handlePageUrl = page => {
    history.push({
      pathname,
      search: `?page=${page}`,
    });
  };

  const handlePrevPage = () => {
    handlePageUrl(paginatedData.meta.prevPage);
  };

  const handleNextPage = () => {
    handlePageUrl(paginatedData.meta.nextPage);
  };

  return (
    <MovieContext.Provider
      value={{
        isLoading,
        paginatedData,
        pathname,
        handlePrevPage,
        handleNextPage,
      }}
    >
      <NowPlayingContent />
    </MovieContext.Provider>
  );
};

export default NowPlaying;
