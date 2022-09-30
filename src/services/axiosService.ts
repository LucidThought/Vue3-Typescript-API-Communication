import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import CONSTANTS from './constants';

// TODO: Make a functin that builds an AxiosRequestConfig
// This will let components call the request function below
//  without having to import the AxiosRequestConfig object
function generateRequest(
  method: string,
  uri: string,
  params: object
): AxiosRequestConfig {
  const requested: AxiosRequestConfig = {
    method: method,
    url: CONSTANTS.API + uri,
    params: {
      app_id: CONSTANTS.APP_ID,
      prettyprint: 'false',
      ...params,
    },
    headers: { accept: 'application/json' },
  };
  return requested;
}

// This request function can be used with any AxiosRequestConfig
// to make REST requests against an API
async function request(options: AxiosRequestConfig) {
  options = {
    ...options,
    // withCredentials: false,
  };
  let response = await axios(options).then((response) => {
    return response;
  });
  return response;
}

export { generateRequest, request };
