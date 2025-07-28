import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Sidebar = ({ className, isMobileOpen, onMobileClose }) => {
  const navigation = [
    { name: "Dashboard", href: "/", icon: "LayoutDashboard" },
    { name: "Courses", href: "/courses", icon: "BookOpen" },
    { name: "Community", href: "/community", icon: "Users" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center px-6 py-8">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-primary to-blue-600 rounded-xl">
            <ApperIcon name="GraduationCap" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="font-display text-heading-md gradient-text">JuntaeSchool</h1>
            <p className="text-xs text-gray-600">Text Influencer Academy</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            onClick={onMobileClose}
            className={({ isActive }) =>
              cn(
                "flex items-center px-4 py-3 text-body-md font-medium rounded-xl transition-all duration-200 group",
                isActive
                  ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-primary"
              )
            }
          >
            {({ isActive }) => (
              <>
                <ApperIcon 
                  name={item.icon} 
                  size={20} 
                  className={cn(
                    "mr-3 flex-shrink-0 transition-colors duration-200",
                    isActive ? "text-white" : "text-gray-500 group-hover:text-primary"
                  )}
                />
                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="p-4 bg-gradient-to-br from-secondary/20 to-yellow-400/20 rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-gradient-to-br from-secondary to-yellow-400 rounded-lg">
              <ApperIcon name="Zap" size={16} className="text-gray-900" />
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">Upgrade to Pro</p>
              <p className="text-xs text-gray-600">Unlock all courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={cn("hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200 z-30", className)}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={onMobileClose}
          />
          <aside className="relative flex flex-col w-80 bg-white shadow-strong transform transition-transform duration-300 ease-out">
            <div className="absolute top-4 right-4">
              <button
                onClick={onMobileClose}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ApperIcon name="X" size={20} />
              </button>
            </div>
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;