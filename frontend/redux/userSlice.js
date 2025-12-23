import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: null,
  loading: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    updateUserProfile: (state, action) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
    logout: (state) => {
      state.userData = null;
    },
  }
})

export const { setUserData, setLoading, updateUserProfile, logout } = userSlice.actions
export default userSlice.reducer