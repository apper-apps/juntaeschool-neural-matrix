import React from "react";
import { cn } from "@/utils/cn";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ 
  className, 
  message = "Something went wrong",
  description = "We encountered an error while loading your data. Please try again.",
  onRetry,
  ...props 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center", className)} {...props}>
      <div className="p-4 bg-gradient-to-br from-error/20 to-red-100 rounded-full mb-6">
        <ApperIcon name="AlertCircle" size={48} className="text-error" />
      </div>
      
      <h3 className="font-display text-heading-md text-gray-900 mb-2">{message}</h3>
      <p className="text-body-md text-gray-600 mb-6 max-w-md">{description}</p>
      
      {onRetry && (
        <Button onClick={onRetry} variant="primary">
          <ApperIcon name="RefreshCw" size={16} className="mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
};

export default Error;