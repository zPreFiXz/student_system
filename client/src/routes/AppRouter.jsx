import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProfileEdit from "../pages/ProfileEdit";
import Profile from "../pages/Profile";
import ProfileView from "../pages/ProfileView";
import Login from "../pages/Login";
import Layouts from "../layouts/Layouts";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<ProfileView />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
