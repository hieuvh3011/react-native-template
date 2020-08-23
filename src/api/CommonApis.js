import axios from 'axios';
import { BASE_URL } from 'react-native-config';
import strings from '../localization/Localization';

/// Define axios errors here. You can custom it for your own.

const NETWORK_ERROR = "network error";
const TIMEOUT_ERROR = 'timeout';

// Define time out for axios instance. 
// After 32 seconds, axios request will be automatically cancelled.
const TIME_OUT = 32000;

// create axios instance
const client = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: { 'Content-Type': 'application/json' }
});
const CancelToken = axios.CancelToken

// function for calling Api
const _callApi = async (url, method, data) => {
  let result = null;
  const timeOut = setTimeout(
    // () => result === null && cancel()
    () => result === null
    , TIME_OUT);
  const config = {
    method,
    url,
    data,
    timeoutErrorMessage: TIMEOUT_ERROR,
    cancelToken: new CancelToken(function executor(canceller) {
      cancel = canceller;
    })
  };
  console.log('config api = ', config);

  await client(config).then(async (response) => {
    result = await _checkResponse(response)
  }).catch(async (error) => {
    result = await _checkError(error)
  });
  clearTimeout(timeOut)
  return result;
};

// Custom response when you meet some errors from network or server 
// those are not return any response
const _checkError = async (error) => {
  console.log(JSON.stringify(error?.response));
  const messageError = strings.network_error;
  let message = error?.response?.message || error?.response?.data?.message || messageError.undefined;
  if (!error) {
    return { code: -1, message, data: null }
  } else if (axios.isCancel(error)) {
    message = messageError.server_taking_too_long_too_response;
    return { code: -1, message, data: null }
  }
  switch (error.message.toLowerCase()) {
    case NETWORK_ERROR:
      message = messageError.no_connection
      break;
    case TIMEOUT_ERROR:
      message = messageError.server_taking_too_long_too_response
      break;
    default:
      break;
  }
  return { code: -1, message, data: null }
};

// This is where your response returned from server.
// You can custom your logic here for your own application. 
// In my application, I simply log it to debug. 
const _checkResponse = async (response) => {
  let responseData = response.data || { code: -1, message: strings.network_error.undefined, data: null };
  console.log(JSON.stringify(response));
  console.log(response);
  return responseData;
};

// other function for call api with each methods
const callGetApi = async (url, data) => await _callApi(url, "GET", data)
const callPostApi = async (url, data) => await _callApi(url, "POST", data)
const callPutApi = async (url, data) => await _callApi(url, "PUT", data)
const callDeleteApi = async (url, data) => await _callApi(url, "DELETE", data)

export { callGetApi, callDeleteApi, callPostApi, callPutApi };