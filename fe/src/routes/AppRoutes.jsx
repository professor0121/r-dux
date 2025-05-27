import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
