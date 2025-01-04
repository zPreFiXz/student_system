import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";

export default function App() {
  return (
    <div className="bg-[#d9d9d9] font-kanit">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/edit_profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
