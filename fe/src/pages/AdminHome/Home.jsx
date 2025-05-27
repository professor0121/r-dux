import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Courses from './components/Courses';
import Schedule from './components/Schedule';
import Assignments from './components/Assignments';
import Attendance from './components/Attendance';
import Reports from './components/Reports';
import SettingsPage from './components/SettingsPage';
import { Home, Users, BookOpen, Calendar, ClipboardList, UserCheck, BarChart2, Settings } from 'lucide-react'; // Import icons from lucide-react

// Define navigation items for the sidebar
const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Dashboard.icon || (() => <div><Home/></div>),  // Use your preferred icon from lucide-react, e.g., Home. Update as needed.
    component: Dashboard,
    badge: null,
  },
  {
    id: 'students',
    label: 'Students',
    icon: Students.icon || (() => <div><Users/></div>),
    component: Students,
    badge: '124',
  },
  {
    id: 'courses',
    label: 'Courses',
    icon: Courses.icon || (() => <div><BookOpen/></div>),
    component: Courses,
    badge: null,
  },
  {
    id: 'schedule',
    label: 'Schedule',
    icon: Schedule.icon || (() => <div><Calendar/></div>),
    component: Schedule,
    badge: null,
  },
  {
    id: 'assignments',
    label: 'Assignments',
    icon: Assignments.icon || (() => <div><ClipboardList/></div>),
    component: Assignments,
    badge: '8',
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: Attendance.icon || (() => <div><UserCheck/></div>),
    component: Attendance,
    badge: null,
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: Reports.icon || (() => <div><BarChart2/></div>),
    component: Reports,
    badge: null,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: SettingsPage.icon || (() => <div><Settings/></div>),
    component: SettingsPage,
    badge: null,
  },
];

const DashboardApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Find the current component to render based on activeItem
  const currentItem = navigationItems.find(item => item.id === activeItem);
  const CurrentComponent = currentItem?.component || Dashboard;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        activeItem={activeItem}
        onItemClick={handleItemClick}
        navigationItems={navigationItems}
      />
      
      <MainArea toggleSidebar={toggleSidebar}>
        <CurrentComponent />
      </MainArea>
    </div>
  );
};

export default DashboardApp;
