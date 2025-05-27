import React from 'react';
import { Menu } from 'lucide-react';

const MainArea = ({ children, toggleSidebar }) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 md:ml-0">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden bg-indigo-600 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <Menu size={24} />
      </button>

      <main className="flex-1 overflow-y-auto">
        <div className="p-6 pt-20 md:pt-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainArea;
