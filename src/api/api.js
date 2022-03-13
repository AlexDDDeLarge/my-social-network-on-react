import * as axios from "axios";

const api = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "8d0c1e48-8c09-415a-b2a4-03f1a8e86133"
  } 
})

export const usersAPI = {
  getUsers(page = 1, count = 10) {
    return api.get(`/users?page=${page}&count=${count}`)
      .then(response => response.data);
  },
  follow(id) {
    return api.post(`/follow/${id}`)
      .then(response => response.data);
  },
  unfollow(id) {
    return api.delete(`/follow/${id}`)
      .then(response => response.data);
  }
};

export const headerAPI = {
  me() {
    return api.get(`/auth/me`)
      .then(response => response.data);
  }
}

export const profileAPI ={
  setUser(userId) {
    return api.get(`/profile/${userId}`)
      .then(response => response.data);
  }
}

