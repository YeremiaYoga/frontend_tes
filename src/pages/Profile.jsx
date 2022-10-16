import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Profile = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

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
  };
  return (
    <div>
      <Navbar />
      <div className="mt-20 flex justify-center">
        <div className="border-4 mx-40 p-10 w-96 space-y-5 border-sky-400">
          <h1 className="text-center text-2xl font-bold">Profile</h1>
          <div className=" font-xl font-medium">
            <label className="font-semibold">Name:</label>
            <p>{name}</p>
          </div>
          <div>
            <label className="font-semibold">Gender:</label>
            <p>{gender}</p>
          </div>
          <div>
            <label className="font-semibold">Email:</label>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
