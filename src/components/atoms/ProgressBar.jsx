import React from "react";
import { cn } from "@/utils/cn";

const ProgressBar = React.forwardRef(({ 
  className, 
  value = 0, 
  max = 100,
  variant = "primary",
  size = "md",
  showLabel = false,
  ...props 
}, ref) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-blue-600",
    secondary: "bg-gradient-to-r from-secondary to-yellow-400",
    success: "bg-gradient-to-r from-success to-green-600",
    warning: "bg-gradient-to-r from-warning to-yellow-600",
    error: "bg-gradient-to-r from-error to-red-600"
  };
  
  const sizes = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };
  
  return (
    <div className="w-full">
      <div
        ref={ref}
        className={cn(
          "w-full bg-gray-200 rounded-full overflow-hidden",
          sizes[size],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full transition-all duration-500 ease-out rounded-full",
            variants[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
          <span>{value} / {max}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
});

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;