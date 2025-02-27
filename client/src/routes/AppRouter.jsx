import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProfileEdit from "../pages/ProfileEdit";
import Profile from "../pages/Profile";
import ProfileView from "../pages/ProfileView";
import Login from "../pages/auth/Login";
import Layouts from "../layouts/Layouts";
import ProtectedRoute from "./ProtectRoute";
import PublicRoute from "./PublicRoute";
import AddProfile from "../pages/admin/AddProfile";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Private Route */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layouts />}>
              <Route path="/" element={<Navigate to="dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:id" element={<ProfileView />} />
              <Route path="/profile/edit/:id" element={<ProfileEdit />} />
              <Route path="/AddProfile" element={<AddProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
