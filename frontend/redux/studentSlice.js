import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((s) =>
        s._id === action.payload._id ? action.payload : s
      );
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (s) => s._id !== action.payload
      );
    },
  },
});

export const {
  setStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
