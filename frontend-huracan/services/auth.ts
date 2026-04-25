import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

// const API = "http://localhost:3001";

export const login = async (data: any) => {
  const res = await axios.post(`${API}/auth/login`, data);
  localStorage.setItem("token", res.data.access_token);
  return res.data;
};

export const register = (data: any) => axios.post(`${API}/auth/register`, data);

export const getMe = async () => {
  const token = localStorage.getItem("token");

  return axios.get(`${API}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
