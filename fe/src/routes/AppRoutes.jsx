import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AdminLogin from '../pages/AdminHome/Login';
import AdminHome from '../pages/AdminHome/Home'; // Assuming you have an AdminHome component
import ProtectedRoute from '../components/ProtectRoute';
import { loadFromStorage } from '../redux/principalAuthSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const AppRoutes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromStorage());
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/adminHome" element={
        <ProtectedRoute>
          <AdminHome />
        </ProtectedRoute>
      } />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
