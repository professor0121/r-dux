import React from 'react';
import { Home } from 'lucide-react';

const Dashboard = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <div className="text-sm text-gray-500">Welcome back, John!</div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Total Students', value: '1,234', change: '+12%', color: 'bg-blue-500' },
        { title: 'Active Courses', value: '48', change: '+3%', color: 'bg-green-500' },
        { title: 'Assignments', value: '156', change: '+8%', color: 'bg-purple-500' },
        { title: 'Attendance Rate', value: '94.2%', change: '+1.2%', color: 'bg-orange-500' }
      ].map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
              <Home className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-600 text-sm font-medium">{stat.change}</span>
            <span className="text-gray-500 text-sm"> from last month</span>
          </div>
        </div>
      ))}
    </div>
    
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {[
            'John Doe submitted Assignment #3',
            'New course "Advanced Mathematics" was created',
            'Sarah Wilson joined Computer Science class',
            'Assignment deadline reminder sent to 45 students'
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <p className="text-gray-700">{activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
