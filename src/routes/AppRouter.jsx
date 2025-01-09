import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EditProfile from "../pages/EditProfile";
import Profile from "../pages/Profile";
import ViewProfile from "../pages/ViewProfile";
import Login from "../pages/Login";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/view_profile" element={<ViewProfile />} />
            <Route path="/edit_profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
