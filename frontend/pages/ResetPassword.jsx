import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const reset = async () => {
    await axios.post("https://lms-backend-3z5b.onrender.com/api/auth/reset-password", {
      email: state.email,
      password,
    });
    alert("Password reset successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-600 to-pink-600">
      <div className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <input
          type="password"
          className="w-full p-3 border rounded mb-4"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={reset} className="w-full bg-indigo-600 text-white py-3 rounded">
          Reset Password
        </button>
      </div>
    </div>
  );
}
