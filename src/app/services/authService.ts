// src/services/authService.ts
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
}) => {
  console.log("API'ye kayıt isteği gönderiliyor", userData);
  return axios.post(`${BASE_URL}/auth/register`, userData);
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  return axios.post(`${BASE_URL}/auth/login`, credentials);
};
