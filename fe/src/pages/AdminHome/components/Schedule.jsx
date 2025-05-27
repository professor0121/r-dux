import React from 'react';
import { Calendar } from 'lucide-react';

const Schedule = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
    <div className="bg-white rounded-lg shadow p-8 text-center">
      <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">Schedule Management</h3>
      <p className="text-gray-500">Schedule component coming soon...</p>
    </div>
  </div>
);

export default Schedule;
