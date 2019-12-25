import { useState, useEffect } from 'react';

import useGlobalApi from 'shared/services/global-api.hook';

const useTheater = (skip, limit) => {
  const { baseApi, cancelToken } = useGlobalApi();

  const [theaters, setTheaters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const source = cancelToken.source();
    const url = `/theaters?skip=${skip}&limit=${limit}`;

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
  }, [skip, limit]);

  return [theaters, isLoading];
};

export default useTheater;
