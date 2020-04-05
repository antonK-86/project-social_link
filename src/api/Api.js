import * as axios from "axios";

const dataApi = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "",
  },
});

export const usersApi = {};

export const authApi = {
  signIn: (email, password, rememberMe = false) => {
    return dataApi.post("auth/login", { email, password, rememberMe });
  },

  authMe: () => {
    return dataApi.get("auth/me");
  },

  signOut: () => {
    return dataApi.delete("auth/login");
  },
};
