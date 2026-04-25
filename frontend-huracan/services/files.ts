import axios from "axios";

// const API = "http://localhost:3001";

const API = process.env.NEXT_PUBLIC_API_URL;

export const uploadFile = async (file: File) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("file", file);

  return axios.post(`${API}/files/upload`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMyFiles = async () => {
  const token = localStorage.getItem("token");

  return axios.get(`${API}/files/my-files`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteFile = async (id: number) => {
  const token = localStorage.getItem("token");

  return axios.delete(`${API}/files/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
