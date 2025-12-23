import { Routes, Route, Navigate } from "react-router-dom";

import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import StudentDashboard from "../pages/StudentDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";
import AdminDashboard from "../pages/AdminDashboard";
import SendOtp from "../pages/SendOtp";
import VerifyOtp from "../pages/VerifyOtp";
import ResetPassword from "../pages/ResetPassword";

import "./App.css";

function App() {
  return (
    <Routes>
      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Auth Routes */}
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />

      {/* Student Dashboard (Protected) */}
      <Route
        path="/student-dashboard"
        element={
          <ProtectedRoute>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
  path="/admin-dashboard"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>
<Route path="/send-otp" element={<SendOtp />} />
<Route path="/verify-otp" element={<VerifyOtp />} />
<Route path="/reset-password" element={<ResetPassword />} />


      {/* Catch All */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;

