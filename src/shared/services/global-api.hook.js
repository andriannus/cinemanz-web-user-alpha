import axios from 'axios';

import API from 'shared/constants/api.constant';

const useGlobalApi = () => {
  const baseApi = axios.create({
    baseURL: API.baseUrl,
    timeout: API.timeout,
  });
  const cancelToken = axios.CancelToken;

  return { baseApi, cancelToken };
};

export default useGlobalApi;
