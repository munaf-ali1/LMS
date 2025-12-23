import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfile, logout } from "../redux/userSlice";

function StudentDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    course: user?.course || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateUserProfile(formData));
    setEditMode(false);
  };

  // 🔥 LOGOUT HANDLER
  const handleLogout = () => {
    dispatch(logout());          // clear redux
    navigate("/register");       // redirect
  };

  if (!user) {
    return <div className="h-screen flex items-center justify-center">
      Please login first
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">
            Student Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* PROFILE CARD */}
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>

            {!editMode ? (
              <>
                <p><b>Name:</b> {user.name}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Course:</b> {user.course || "Not Assigned"}</p>

                <button
                  onClick={() => setEditMode(true)}
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit Profile
                </button>
              </>
            ) : (
              <>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mb-3 p-3 border rounded-lg"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mb-3 p-3 border rounded-lg"
                />

                <input
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full mb-3 p-3 border rounded-lg"
                />

                <div className="flex gap-3">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>

          {/* INFO CARD */}
          <div className="bg-purple-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Student Info</h2>
            <p>🎓 Role: Student</p>
            <p>✅ Verified: {user.isVerified ? "Yes" : "No"}</p>
            <p>📚 Course Progress: Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;

