import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

// content type
const authUser: any = sessionStorage.getItem('authUser');
const token = JSON.parse(authUser) ? JSON.parse(authUser).token : null;
if (token) axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

class APIClient {
  /**
   * Fetches data from the given URL
   */
  get = (url: string, params?: any): Promise<AxiosResponse> => {
    let response: Promise<AxiosResponse>;

    const paramKeys: string[] = [];

    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + '=' + params[key]);
        return paramKeys;
      });

      const queryString =
        paramKeys && paramKeys.length ? paramKeys.join('&') : '';
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };

  /**
   * Posts the given data to the URL
   */
  create = (url: string, data: any): Promise<AxiosResponse> => {
    return axios.post(url, data);
  };

  /**
   * Updates data
   */
  update = (url: string, data: any): Promise<AxiosResponse> => {
    return axios.patch(url, data);
  };

  put = (url: string, data: any): Promise<AxiosResponse> => {
    return axios.put(url, data);
  };

  /**
   * Deletes data
   */
  delete = (
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> => {
    return axios.delete(url, { ...config });
  };
}

const getLoggedinUser = () => {
  const user = sessionStorage.getItem('authUser');
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, getLoggedinUser };
