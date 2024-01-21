import axios, { AxiosResponse } from 'axios';

import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '../../../data/protocols/http';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.withCredentials = true;

// /**
//  * Sets the default authorization
//  * @param {*} token
//  */
// const setAuthorization = (token: string) => {
//   axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
// };

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
