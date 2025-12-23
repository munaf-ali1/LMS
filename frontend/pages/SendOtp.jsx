import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SendOtp() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    await axios.post("http://localhost:8000/api/auth/send-otp", { email });
    navigate("/verify-otp", { state: { email } });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-600 to-pink-600">
      <div className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <input
          className="w-full p-3 border rounded mb-4"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={submit} className="w-full bg-indigo-600 text-white py-3 rounded">
          Send OTP
        </button>
      </div>
    </div>
  );
}
