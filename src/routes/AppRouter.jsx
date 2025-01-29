import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EditProfile from "../pages/EditProfile";
import Profile from "../pages/Profile";
import ViewProfile from "../pages/ViewProfile";
import Login from "../pages/Login";
import Layouts from "../layouts/Layouts";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/view-profile" element={<ViewProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
