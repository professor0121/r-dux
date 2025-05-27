// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import principalAuthReducer from './principalAuthSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    principalAuth: principalAuthReducer,
  },
});

export default store;
