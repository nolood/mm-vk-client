import axios from "axios";

export const api = axios.create({
  baseURL: `http://localhost:5000`,
  headers: { "Content-Type": "application/json" },
});

export const setTokenToHeaders = (token: string): void => {
  const newHeaders = {
    ...api.defaults.headers.common,
    Authorization: "Bearer " + token,
  };
  api.defaults.headers.common = { ...newHeaders };
};
