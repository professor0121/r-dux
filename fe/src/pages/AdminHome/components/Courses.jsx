import React from 'react';
import { BookOpen, Plus, Edit } from 'lucide-react';

const Courses = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
        <Plus size={20} />
        <span>Create Course</span>
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'Advanced Mathematics', students: 45, instructor: 'Dr. Smith', progress: 75 },
        { title: 'Computer Science 101', students: 67, instructor: 'Prof. Johnson', progress: 60 },
        { title: 'Physics Fundamentals', students: 38, instructor: 'Dr. Wilson', progress: 90 },
        { title: 'Chemistry Lab', students: 29, instructor: 'Prof. Davis', progress: 45 },
        { title: 'English Literature', students: 52, instructor: 'Dr. Brown', progress: 80 },
        { title: 'History of Science', students: 34, instructor: 'Prof. Miller', progress: 55 }
      ].map((course, index) => (
        <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-sm text-gray-500">{course.students} students</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 bg-indigo-50 text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100">
                View Details
              </button>
              <button className="bg-gray-50 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100">
                <Edit size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Courses;
