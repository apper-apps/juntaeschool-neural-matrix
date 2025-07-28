import React from "react";
import { cn } from "@/utils/cn";
import { Card, CardContent } from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const StatCard = ({ 
  className,
  title,
  value,
  change,
  changeType = "neutral",
  icon,
  gradient = "primary",
  ...props 
}) => {
  const gradients = {
    primary: "from-primary to-blue-600",
    secondary: "from-secondary to-yellow-400",
    success: "from-success to-green-600",
    warning: "from-warning to-yellow-600",
    error: "from-error to-red-600",
    info: "from-info to-blue-500"
  };

  const changeColors = {
    positive: "text-success",
    negative: "text-error",
    neutral: "text-gray-600"
  };

  return (
    <Card className={cn("overflow-hidden hover:scale-[1.02] transition-transform duration-200", className)} {...props}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-body-sm text-gray-600 font-medium mb-1">{title}</p>
            <p className="text-display-sm font-bold gradient-text mb-2">{value}</p>
            {change && (
              <div className="flex items-center space-x-1">
                <ApperIcon 
                  name={changeType === "positive" ? "TrendingUp" : changeType === "negative" ? "TrendingDown" : "Minus"} 
                  size={16} 
                  className={cn("flex-shrink-0", changeColors[changeType])}
                />
                <span className={cn("text-body-sm font-medium", changeColors[changeType])}>
                  {change}
                </span>
              </div>
            )}
          </div>
          {icon && (
            <div className={cn("p-3 rounded-xl bg-gradient-to-br", gradients[gradient])}>
              <ApperIcon name={icon} size={24} className="text-white" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;