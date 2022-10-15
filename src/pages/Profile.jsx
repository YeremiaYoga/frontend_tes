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
  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(`http://localhost:4000/api/userId/${id}`);
    setName(response.data.name);
    setGender(response.data.gender);
    setEmail(response.data.email);
    setPassword(response.data.password);
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className=" rounded  ">
          <div>
            <h1 className="text-2xl font-serif font-bold text-center p-3">
              Profile
            </h1>
            <div>
              <div className="text-center">{/* <p>{msg}</p> */}</div>
              <form>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div>
                    <label>Nama</label>
                    <div>
                      <input
                        type="text"
                        className="border-2  rounded px-2 py-1 border-sky-400 "
                        placeholder="Masukan Nama"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label>Email</label>
                    <div>
                      <input
                        type="email"
                        className="border-2  rounded px-2 py-1 border-sky-400 "
                        placeholder="Masukan Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label>Jenis Kelamin</label>
                    <div>
                      <input
                        type="email"
                        className="border-2  rounded px-2 py-1 w-56 border-sky-400"
                        placeholder=""
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label>Password</label>
                    <div>
                      <input
                        type="text"
                        className="border-2  rounded px-2 py-1 border-sky-400 "
                        placeholder="Masukan Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="p-5"></div>
                </div>
              </form>
              <div className="py-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
