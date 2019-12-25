import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import TheaterContent from 'pages/theater/theater.content';
import { LIMIT_PER_PAGE } from 'pages/theater/shared/constants/theater.constant';
import TheaterContext from 'pages/theater/shared/services/theater.context';
import useTheater from 'pages/theater/shared/services/theater.hook';

import { getPaginatedData } from 'shared/utilities/paginated-data.utility';

const Theater = () => {
  const history = useHistory();
  const { pathname, search } = useLocation();

  const pageNumber = parseInt(parse(search).page, 10) || 1;
  const skip = (pageNumber - 1) * LIMIT_PER_PAGE;

  const [theaters, isLoading] = useTheater(skip, LIMIT_PER_PAGE);

  const data = {
    data: theaters.data,
    page: pageNumber,
    perPage: LIMIT_PER_PAGE,
    total: theaters.total,
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
    <TheaterContext.Provider
      value={{
        isLoading,
        paginatedData,
        handlePrevPage,
        handleNextPage,
      }}
    >
      <TheaterContent />
    </TheaterContext.Provider>
  );
};

export default Theater;
