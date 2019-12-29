import React, { useEffect, useState } from 'react';

import DetailContent from 'pages/theater/detail/detail.content';
import useGlobalApi from 'shared/services/global-api.hook';
import TheaterContext from 'pages/theater/shared/services/theater.context';

const Detail = ({ match }) => {
  const selectedTheater = match.params.id;

  const { baseApi, cancelToken } = useGlobalApi();

  const [theater, setTheater] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const source = cancelToken.source();
    const url = `/theaters/${selectedTheater}`;

    (async () => {
      try {
        const result = await baseApi.get(url, {
          cancelToken: source.token,
        });

        setTheater(result.data.data);
        setIsLoading(false);
      } catch (error) {
        setTheater({});
        setIsLoading(false);
      }
    })();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTheater]);

  return (
    <TheaterContext.Provider
      value={{
        theater,
        isLoading,
      }}
    >
      <DetailContent />
    </TheaterContext.Provider>
  );
};

export default Detail;
