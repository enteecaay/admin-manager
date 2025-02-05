import { User } from "../models/User";
import axiosInstance from "./axiosConfig";

// Lấy danh sách Users
export const getUsers = async () => {
  const response = axiosInstance.get<User[]>("/User");
  return response;
};

// Thêm User mới
export const addUser = async (userData: any) => {
  return axiosInstance.post("/User", userData);
};

// Update User
export const updateUser = async (userId: string, userData: User) => {
  return axiosInstance.put(`/User/${userId}`, userData);
};

// Xóa User
export const deleteUser = async (userId: string) => {
  return axiosInstance.delete(`/User/${userId}`);
};
