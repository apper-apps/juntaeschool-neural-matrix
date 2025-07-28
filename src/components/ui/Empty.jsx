import React from "react";
import { cn } from "@/utils/cn";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  className, 
  message = "No data available",
  description = "There's nothing to show here yet. Check back later or try refreshing the page.",
  actionLabel = "Refresh",
  onAction,
  icon = "Inbox",
  ...props 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center", className)} {...props}>
      <div className="p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
        <ApperIcon name={icon} size={48} className="text-gray-400" />
      </div>
      
      <h3 className="font-display text-heading-md text-gray-900 mb-2">{message}</h3>
      <p className="text-body-md text-gray-600 mb-6 max-w-md">{description}</p>
      
      {onAction && (
        <Button onClick={onAction} variant="outline">
          <ApperIcon name="RefreshCw" size={16} className="mr-2" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default Empty;