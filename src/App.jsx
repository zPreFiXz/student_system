import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";
import ViewProfile from "./components/ViewProfile";

export default function App() {
  return (
    <div className="font-kanit">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/view_profile" element={<ViewProfile />} />
            <Route path="/edit_profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
