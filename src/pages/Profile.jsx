import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const id = localStorage.getItem("userId");
    const response = await axios.get(`http://localhost:4000/api/user/${id} `, {
      headers: {
        "x-access-token": token,
      },
    });
    setName(response.data.name);
    setGender(response.data.gender);
    setEmail(response.data.email);
    setPassword(response.data.password);
  };
  return (
    <div>
      <Navbar />
      <div className="mt-20 flex justify-center">
        <div className="border-4 mx-40 p-10 w-60 space-y-5 border-sky-400">
          <div className="">
            <label>Name:</label>
            <p>{name}</p>
          </div>
          <div>
            <label>Gender:</label>
            <p>{gender}</p>
          </div>
          <div>
            <label>Email:</label>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
