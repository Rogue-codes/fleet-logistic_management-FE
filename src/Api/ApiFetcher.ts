/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import "nprogress/nprogress.css";
import Nprogress from "nprogress";

const ApiFetcher = axios.create({
  baseURL:  import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const onRequest = (request: any) => {
  Nprogress.start();
  const token = localStorage.getItem("fleetManagement_admin_token")
    ? JSON.parse(localStorage.getItem("fleetManagement_admin_token")!)
    : null;
  request.headers.Authorization = token ? `Bearer ${token}` : "";
  return request;
};

const onRequestError = (error: any) => {
  Nprogress.done();
  return Promise.reject(error);
};

const onResponse = (response: any) => {
  Nprogress.done();
  return response;
};

const onResponseError = (error: any) => {
  Nprogress.done();
  // handle when the error does nit have a response
  if (!error.response)
    error.response = {
      status: 400,
    };
  return Promise.reject(error);
};

ApiFetcher.interceptors.request.use(onRequest, onRequestError);
ApiFetcher.interceptors.response.use(onResponse, onResponseError);

export default ApiFetcher;
