import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const history = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    try {
        
      const response = await  axios.post("http://localhost:4000/api/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("accessToken",response.data.accessToken);
      localStorage.setItem("id",response.data.id);
      
      history("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="bg-white rounded shadow-xl flex flex-col w-full md:w-1/3 items-center max-w-4xl">
      <div>
        <h1 className="text-2xl font-serif font-bold text-center p-3">Login</h1>
        <div>
          <div className="text-center">
            <p>{msg}</p>
          </div>
          <form onSubmit={Login}>
            <div className="flex flex-col items-center justify-center space-y-2">
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
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    className="border-2  rounded px-2 py-1 border-sky-400 "
                    placeholder="Masukan Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="p-5">
                <button
                  type="submit"
                  className="rounded-2xl text-white bg-sky-400 hover:bg-sky-500 py-2 px-6"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="py-4">
            <Link className="text-sky-400 py-6 cursor-pointer" to="/register">
              Buat Akun
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
