import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addStudent,
  updateStudent,
  deleteStudent,
} from "../redux/studentSlice";
import { logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const students = useSelector((state) => state.students.students);
  const admin = useSelector((state) => state.user.userData);

  const [formData, setFormData] = useState({
    _id: null,
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (formData._id) {
      dispatch(updateStudent(formData));
    } else {
      dispatch(addStudent({ ...formData, _id: Date.now().toString() }));
    }

    setFormData({ _id: null, name: "", email: "", course: "" });
  };

  const handleEdit = (student) => {
    setFormData(student);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-purple-600">
            Admin Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* ADD / EDIT FORM */}
        <div className="bg-purple-50 p-4 rounded-xl mb-6">
          <h2 className="font-semibold mb-3">
            {formData._id ? "Edit Student" : "Add Student"}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />
            <input
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />
          </div>

          <button
            onClick={handleAddOrUpdate}
            className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-lg"
          >
            {formData._id ? "Update Student" : "Add Student"}
          </button>
        </div>

        {/* STUDENT TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border rounded-xl overflow-hidden">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Course</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No students found
                  </td>
                </tr>
              ) : (
                students.map((student) => (
                  <tr key={student._id} className="border-t">
                    <td className="p-3">{student.name}</td>
                    <td className="p-3">{student.email}</td>
                    <td className="p-3">{student.course}</td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleEdit(student)}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(student._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
