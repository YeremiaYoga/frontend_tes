
import { Outlet } from "react-router-dom";

const Login = () => {
 
  return (
    <div>
      <div className="flex justify-center py-40">
        <Outlet/>
      </div>
    </div>
  );
};
export default Login;
