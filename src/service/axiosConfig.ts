import axios from "axios";
import { message } from "antd";

const axiosInstance = axios.create({
  baseURL: "https://67a1d050409de5ed525326ac.mockapi.io/mockapi",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response; 
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        message.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại!");
        localStorage.removeItem("token");
        window.location.href = "/login"; 
      } else if (status === 403) {
        message.error("Bạn không có quyền truy cập!");
      } else if (status === 500) {
        message.error("Lỗi server, vui lòng thử lại sau!");
      } else {
        message.error(data.message || "Đã có lỗi xảy ra!");
      }
    } else {
      message.error("Không thể kết nối đến server!");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
