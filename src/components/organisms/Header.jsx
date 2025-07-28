import React from "react";
import { cn } from "@/utils/cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Header = ({ className, onMobileMenuToggle, ...props }) => {
  return (
    <header className={cn("bg-white border-b border-gray-200 px-6 py-4", className)} {...props}>
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMobileMenuToggle}
            className="p-2"
          >
            <ApperIcon name="Menu" size={20} />
          </Button>
        </div>

        {/* Breadcrumb - Hidden on mobile */}
        <div className="hidden sm:flex items-center space-x-2 text-body-sm text-gray-600">
          <ApperIcon name="Home" size={16} />
          <ApperIcon name="ChevronRight" size={14} />
          <span className="font-medium text-gray-900">Dashboard</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative p-2">
            <ApperIcon name="Bell" size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-error rounded-full"></span>
          </Button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-body-sm font-medium text-gray-900">Alex Johnson</p>
              <p className="text-xs text-gray-600">Content Creator</p>
            </div>
            <Avatar className="h-10 w-10">
              <AvatarImage src="/api/placeholder/40/40" alt="Alex Johnson" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;