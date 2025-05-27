import React from 'react';
import { BarChart3 } from 'lucide-react';

const Reports = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
    <div className="bg-white rounded-lg shadow p-8 text-center">
      <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics & Reports</h3>
      <p className="text-gray-500">Reports component coming soon...</p>
    </div>
  </div>
);

export default Reports;
