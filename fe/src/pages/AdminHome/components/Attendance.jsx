import React from 'react';
import { UserCheck } from 'lucide-react';

const Attendance = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
    <div className="bg-white rounded-lg shadow p-8 text-center">
      <UserCheck className="h-16 w-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">Attendance Tracking</h3>
      <p className="text-gray-500">Attendance component coming soon...</p>
    </div>
  </div>
);

export default Attendance;
