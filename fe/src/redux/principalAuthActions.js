// src/features/principalAuth/principalAuthActions.js
import axios from 'axios';
import { loginStart, loginSuccess, loginFailure } from './principalAuthSlice';

export const loginPrincipal = (credentials) => async (dispatch) => {
  dispatch(loginStart());

  try {
    const response = await axios.post(
      'http://localhost:5000/api/admin/principal/login',
      credentials,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data=response.data;
     localStorage.setItem('principalToken', data.token);
    localStorage.setItem('principalUser', JSON.stringify(data.user));
    dispatch(loginSuccess(data));
  } catch (error) {
    // Handle errors gracefully
    let message = 'Server error';

    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }

    dispatch(loginFailure(message));
  }
};
