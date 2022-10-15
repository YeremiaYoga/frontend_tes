import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode"
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [id,setId] = useState([]);


  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("id"));
    if(id){
      const decoded = jwt_decode(id.data.id);
      setId(decoded.id);
    }
  },[])
  console.log(id);

  const Logout = async() => {
    try{
      await axios.delete("http://localhost:4000/api/logout",{withCredentials:true});
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      navigate("/");
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <div>
        <div className="flex items-center justify-around border-b border-slate-300">
          <div className="z-50 p-4 md:w-auto w-full flex justify-between  ">
            <h1 className="font-bold text-2xl font-serif">Tes</h1>
          </div>
          <ul className="md:flex hidden items-center gap-8 ">
          <li>
              <Link  to={`/profile/${id}`}>Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            
            <li>
              <button onClick={Logout}>Logout</button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};
export default Navbar;
