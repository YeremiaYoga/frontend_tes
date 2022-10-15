import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ProdukList from "./components/ProdukList";
import ProdukAdd from "./components/ProdukAdd";
import ProdukUpdate from "./components/ProdukUpdate";
import LoginForm from "./components/LoginForm";
import RegisForm from "./components/RegisterForm";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisForm />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/add" element={<ProdukAdd />} />
          <Route path="/dashboard/update/:id" element={<ProdukUpdate />} />
          <Route path="/dashboard" element={<ProdukList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
