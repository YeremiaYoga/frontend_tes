import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/");
      return;
    }

    axios
      .get("http://localhost:4000/api/verif", {
        headers: { "x-access-token": accessToken },
      })
      .then((res) => {
        if (res?.status != 200) {
          navigate("/");
          return;
        }
      })
      .catch((_) => {
        navigate("/");
        return;
      });
  }, []);

  const axiosJwt = axios.create();

  axiosJwt.interceptors.request.use(async(config) => {
    const currentDate = new Date();
    if(expire * 1000 < currentDate.getTime()){
      const response = await axios.get("http://localhost:4000/api/token");
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);

    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  // const getUser = async () => {
  //   const response = await axiosJwt.get("htttp://localhost:4000/api/user",{
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
  //   setUser
  // }

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/token");
      setToken(response.data.accessToken);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Dashboard;
