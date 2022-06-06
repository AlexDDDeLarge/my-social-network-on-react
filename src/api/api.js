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
  },
  searchUser(userName, count = 10, page = 1) {
    return api.get(`/users?count=${count}&page=${page}&term=${userName}`)
      .then(response => response.data)
  },
  getFriends(page = 1, count = 10) {
    return api.get(`/users?page=${page}&count=${count}&friend=${true}`)
      .then(response => response.data)
  }
};

export const authAPI = {
  me() {
    return api.get(`/auth/me`)
      .then(response => response.data);
  },
  login(email, password, rememberMe, captcha) {
    return api.post(`/auth/login`, {
      email,
      password,
      rememberMe,
      captcha
    })
      .then(response => response.data)
  },
  logout() {
    return api.delete(`/auth/login`)
      .then(response => response.data)
  }
}

export const profileAPI ={
  setUser(userId) {
    return api.get(`/profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId) {
    return api.get(`/profile/status/${userId}`)
      .then(response => response.data);
  },
  updateStatus(status) {
    return api.put(`profile/status`, {
      status: status
    })
      .then(response => response.data);
  }
}

 