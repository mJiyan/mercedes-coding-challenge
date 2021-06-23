import axios from "axios";
import { HTTP, endPoint, MaxReviewFileSize, keys } from "./constants";
import storage from "./storage";
import { history } from "../configureStore";
import { store } from "../index";
import { toast } from "react-toastify";
import { showLoading, hideLoading } from "react-redux-loading-bar";



const parseJwt = token => {
  let base64Url = token.split(".")[0];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(c => {
        return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};


const expired = (expiresAt, minutes = 1) => {
  const timespan = new Date().getTime() / 1000;

  return expiresAt - minutes * 60 <= timespan;
};

const refreshToken = async refresh => {
  const { data } = await axios({
    url: `${endPoint}/token/refresh`,
    data: refresh,
    method: HTTP.POST
  });

  return data;
};



const getToken = async () => {
  const auth = storage.getAuth();
  if (auth.token && auth.refresh) {
    const jwt = parseJwt(auth.token);
    if (expired(jwt.exp)) {
      try {
        const data = await refreshToken({ refresh: auth.refresh });
        storage.setAuth(data);
        return data.token.value;
      }
      catch (error) {
        storage.removeAuth();
        return null;
      }
    }
    return auth.token;
  }
  return null;
};





export const developmentApiCall = async (
  url = "",
  data = null,
  params = null,
  method = HTTP.GET,
  headers = {},
  withAuth = true
) => {

  let token = null;

  if (withAuth) {
    token = await getToken();
  }

  return axios({
    url: `${endPoint}${url}`,
    data,
    params,
    method,
    headers: {
      ...headers,
      Authorization: `Bearer ${withAuth ? token : ""}`
    },
    maxContentLength: MaxReviewFileSize
  }).then(p => {
    return p
  }).catch(err => {
    if (err.toString() !== "Error: Network Error")
      throw err
    else
      return { data: null }
  });
};



axios.interceptors.response.use(
  response => {
    store.dispatch(hideLoading());
    return response;
  },
  error => {
    if (!error.response) {
      console.log("# NETWORK ERROR # ", error);
      history.push("/error");
      return Promise.reject(error);

    }
    if (error.response.status === 401) {
      store.dispatch({ type: "ACCOUNT/LOGOUT" });
      if (history.location && history.location.pathname) {
        storage.setItem(keys.LastLocation, history.location.pathname);
      }
      history.push("/login", { showLogin: true, authenticated: false });
    } else if (error.response.status === 422) {
      const { errors } = error.response.data;
      const message = Object.keys(errors)
        .reverse()
        .map(key => errors[key])
        .join(",");
      toast.error(`Please, ${message}`);
    }
    store.dispatch(hideLoading());
    return Promise.reject(error.response);
  }
);

axios.interceptors.request.use(
  config => {
    store.dispatch(showLoading());
    config.maxContentLength = MaxReviewFileSize;
    config.maxBodyLength = MaxReviewFileSize;
    return config;
  },
  error => {
    store.dispatch(hideLoading());
    return Promise.reject(error);
  }
);




export default { developmentApiCall };