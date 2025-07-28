import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
const ActivityItem = ({ 
  className,
  activity,
  ...props 
}) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case "course_started": return "Play";
      case "lesson_completed": return "CheckCircle";
      case "course_completed": return "Award";
      case "quiz_passed": return "Target";
      default: return "Activity";
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case "course_started": return "text-primary";
      case "lesson_completed": return "text-success";
      case "course_completed": return "text-secondary";
      case "quiz_passed": return "text-info";
      default: return "text-gray-600";
    }
  };

  return (
    <div className={cn("flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors", className)} {...props}>
      <div className={cn("flex-shrink-0 p-2 rounded-full bg-gray-100", getActivityColor(activity.type))}>
        <ApperIcon name={getActivityIcon(activity.type)} size={16} className={getActivityColor(activity.type)} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-body-sm text-gray-900 font-medium">{activity.description}</p>
        <p className="text-body-sm text-gray-600">{activity.courseName}</p>
        <p className="text-xs text-gray-500 mt-1">
          {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
</p>
        <p className="text-xs text-gray-500">
          {formatDistanceToNow(new Date(activity.timestamp), { 
            addSuffix: true,
            locale: ko 
          })}
        </p>
      </div>
    </div>
  );
};

export default ActivityItem;