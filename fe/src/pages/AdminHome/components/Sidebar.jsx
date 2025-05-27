import React from 'react';
import { X, ChevronRight } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar, activeItem, onItemClick, navigationItems }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:z-auto
        w-64 border-r border-gray-200 flex flex-col
      `}>
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 bg-indigo-600 flex-shrink-0">
          <h2 className="text-white font-bold text-lg">EduPortal</h2>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white hover:text-indigo-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onItemClick(item.id)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200
                      ${isActive 
                        ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent 
                        size={20} 
                        className={isActive ? 'text-indigo-600' : 'text-gray-500'} 
                      />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {item.badge && (
                        <span className={`
                          px-2 py-0.5 text-xs font-semibold rounded-full
                          ${isActive 
                            ? 'bg-indigo-100 text-indigo-700' 
                            : 'bg-gray-200 text-gray-600'
                          }
                        `}>
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight 
                        size={16} 
                        className={`
                          transition-transform duration-200
                          ${isActive ? 'text-indigo-600 rotate-90' : 'text-gray-400'}
                        `} 
                      />
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-gray-200 p-4 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
