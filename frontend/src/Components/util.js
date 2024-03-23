import axios from "axios";

const getAxiosWithToken = () => {
  const token = sessionStorage.getItem("token");
  const axiosWithToken = axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });

  return axiosWithToken;
};

export { getAxiosWithToken };
