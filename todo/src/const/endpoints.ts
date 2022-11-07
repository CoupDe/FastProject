const ENDPOINTS = {
  VERSIONAPI: "v1/",
  BASE: "http://127.0.0.1:8000/",
  AUTH: {
    LOGIN: "login/",
    REFRESH: "refresh/",
    AUTH: "auth/",
    LOGOUT: "logout/",
    TOKEN: "token/",
  },
  get baseApi() {
    return this.BASE + "api/" + this.VERSIONAPI;
  },
  TASK: {
    TASKLIST: "/tasklist/",
  },
};

export default ENDPOINTS;
