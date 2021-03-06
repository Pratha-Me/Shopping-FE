import Axios from "axios";
import AxiosService from "../api/AxiosService";

// Login Method
const postLogin = (data) => {
  return AxiosService.login.post("/user/login", data).catch((err) => {
    let message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case 500:
          message =
            "Sorry! something went wrong, please contact our support team";
          break;
        case 401:
          message = "Username or Password is incorrect";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};

// Register Method
const postRegister = (data) => {
  return AxiosService.login
    .post("/auth/register", data)
    .then((response) => {
      if (response.status >= 200 || response.status <= 299)
        return response.data;
      throw response.data;
    })
    .catch((err) => {
      let message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

const postSendOtp = (data) => {
  return AxiosService.login.post("/auth/otp", data);
};

const getAnUser = () => {
  return AxiosService.app.get("auth/getAnUser");
};

const postForgetPwd = (data) => {
  return AxiosService.login.post("/auth/change-password", data);
};

const verifyUserEmail = (data) => {
  return AxiosService.login.post("/auth/register/verify", data);
};

const updateAddress = (data) => {
  return AxiosService.app.put("/auth/register", data);
};

const getOrder = () => {
  return AxiosService.app.get("/orders/getAllOrdersForAnUser");
};

const getOrderItem = (id) => {
  return AxiosService.app.get(`/inventory/item?itemId=${id}`);
};

export {
  postLogin,
  postSendOtp,
  postForgetPwd,
  postRegister,
  getAnUser,
  updateAddress,
  verifyUserEmail,
  getOrder,
  getOrderItem,
};
