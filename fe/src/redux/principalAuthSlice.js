// src/redux/principalAuthSlice.js (or src/features/principalAuth/principalAuthSlice.js)

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  principal: null,
  token: null,
  loading: false,
  error: null,
  initialized: false, // very important
};

const principalAuthSlice = createSlice({
  name: 'principalAuth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.principal = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.principal = null;
      state.token = null;
      localStorage.removeItem('principalToken');
      localStorage.removeItem('principalUser');
    },
    // ✅ Add this reducer to load from localStorage
    loadFromStorage: (state) => {
      const token = localStorage.getItem('principalToken');
      const user = localStorage.getItem('principalUser');
      if (token && user) {
        state.token = token;
        state.principal = JSON.parse(user);
      }
      state.initialized = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  loadFromStorage, // ✅ Make sure this is included here
} = principalAuthSlice.actions;

export default principalAuthSlice.reducer;
