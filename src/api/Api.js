import * as axios from "axios";

const dataApi = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "3b0fc426-1055-4e9c-95b5-f49150fe87ee",
  },
});

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

export const usersApi = {
  getUsers: (count, page) => {
    return dataApi.get(`users?count=${count}&page=${page}`);
  },
  follow: (userId) => {
    return dataApi.post(`follow/${userId}`);
  },
  unFollow: (userId) => {
    return dataApi.delete(`follow/${userId}`);
  },
  getSubscribe: (userId) => {
    return dataApi.get(`follow/${userId}`);
  },
};

export const profileApi = {
  getProfile: (userId) => {
    return dataApi.get("profile/" + userId);
  },
  getProfileStatus: (userId) => {
    return dataApi.get("profile/status/" + userId);
  },
  setProfileStatus: (textStatus) => {
    return dataApi.put("profile/status", { status: textStatus });
  },
};
