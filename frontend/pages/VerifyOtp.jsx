import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const verify = async () => {
    await axios.post("http://localhost:8000/api/auth/verify-otp", {
      email: state.email,
      otp,
    });
    navigate("/reset-password", { state });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-600 to-pink-600">
      <div className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
        <input
          className="w-full p-3 border rounded mb-4"
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={verify} className="w-full bg-indigo-600 text-white py-3 rounded">
          Verify OTP
        </button>
      </div>
    </div>
  );
}
