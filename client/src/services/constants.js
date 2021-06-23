const apiUrl = {
  Development: "http://localhost:8081",
  //Test: "https://test.api.com/",
  //Production: "https://api.com/",
};

export const HTTP = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const keys = {
  Token: "MERCEDES__JWT",
  Refresh: "MERCEDES__REFRESH",
  LastLocation: "MERCEDES__LAST__LOCATION",
};

export const socketKeys = {
  Server: 'http://localhost:4000',
  Event: 'broadcast'
}

export const endPoint =
  apiUrl[process.env.REACT_APP_NODE_ENV] || apiUrl.Development;


export const MaxReviewFileSize = 50 * 1024 * 1024; // MB