import axios, { AxiosResponse } from "axios";
import { DataType, LoginDataType, MeDataType, ResponseDataType, SecurityType, UsersDataType } from "../types/apiTypes";
import { ProfileType } from "../types/types";

const api = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "8d0c1e48-8c09-415a-b2a4-03f1a8e86133"
  } 
})

export const usersAPI = {
  getUsers(page = 1, count = 10) {
    return api.get<UsersDataType>(`/users?page=${page}&count=${count}`)
      .then(response => response.data);
  },
  follow(id: number) {
    return api.post<ResponseDataType<DataType>>(`/follow/${id}`)
      .then(response => response.data);
  },
  unfollow(id: number) {
    return api.delete<ResponseDataType<DataType>>(`/follow/${id}`)
      .then(response => response.data);
  },
  searchUser(userName: string, count = 10, page = 1) {
    return api.get<UsersDataType>(`/users?count=${count}&page=${page}&term=${userName}`)
      .then(response => response.data)
  },
  getFriends(page = 1, count = 10) {
    return api.get<UsersDataType>(`/users?page=${page}&count=${count}&friend=${true}`)
      .then(response => response.data)
  }
};

export const authAPI = {
  me() {
    return api.get<ResponseDataType<MeDataType>>(`/auth/me`)
      .then(response => response.data);
  },
  login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
    return api.post<ResponseDataType<LoginDataType>>(`/auth/login`, {
      email,
      password,
      rememberMe,
      captcha
    })
      .then(response => response.data)
  },
  logout() {
    return api.delete<ResponseDataType<DataType>>(`/auth/login`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  setUser(userId: number) {
    return api.get<ProfileType>(`/profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId: number) {
    return api.get(`/profile/status/${userId}`)
      .then(response => response.data);
  },
  updateStatus(status: string) {
    return api.put(`profile/status`, {
      status: status
    })
      .then(response => response.data);
  },
  updateAvatar(newAvatar: any) {
    let formData = new FormData();
    formData.append("image", newAvatar);
    return api.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => response.data)
  },
  updateProfileInfo(profile: ProfileType) {
    return api.put("/profile", profile)
      .then(response => response.data);
  }
}

export const securityAPI = {
  getCapchaUrl() {
    return api.get<SecurityType>("/security/get-captcha-url")
      .then(response => response.data)
  }
}
 