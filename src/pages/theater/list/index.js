import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import ListContent from 'pages/theater/list/list.content';
import { LIMIT_PER_PAGE } from 'pages/theater/shared/constants/theater.constant';
import TheaterContext from 'pages/theater/shared/services/theater.context';

import useGlobalApi from 'shared/services/global-api.hook';
import { getPaginatedData } from 'shared/utilities/paginated-data.utility';

const List = () => {
  const history = useHistory();
  const { pathname, search } = useLocation();
  const { baseApi, cancelToken } = useGlobalApi();

  const pageNumber = parseInt(parse(search).page, 10) || 1;
  const skip = (pageNumber - 1) * LIMIT_PER_PAGE;

  const [theaters, setTheaters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const source = cancelToken.source();
    const url = `/theaters?skip=${skip}&limit=${LIMIT_PER_PAGE}`;

    (async () => {
      try {
        const result = await baseApi.get(url, {
          cancelToken: source.token,
        });

        setTheaters(result.data);
        setIsLoading(false);
      } catch (error) {
        setTheaters([]);
        setIsLoading(false);
      }
    })();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

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
        pathname,
        handlePrevPage,
        handleNextPage,
      }}
    >
      <ListContent />
    </TheaterContext.Provider>
  );
};

export default List;
