import axios from "axios";
import { getHeaders } from "../helpers/AuthHelpers";

const AxiosService = {
  // The instance used to consume the Login API.
  login: axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),

  // The instance used to consume the protected API services
  app: axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),

  // The instance used to consume cloud services
  cloud: axios.create({
    baseURL: process.env.cloud_api_url,
  }),
};

// This interceptor is used for changing the "Authorization" header content depending on what request is being made.
AxiosService.app.interceptors.request.use((config) => {
  //   if(config.url === "some url"){
  //     config.headers["Content-Type"] = "multipart/form-data";
  //   }
  
  config.headers = getHeaders();
});

export default AxiosService;
