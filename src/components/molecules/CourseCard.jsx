import React from "react";
import { cn } from "@/utils/cn";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ProgressBar from "@/components/atoms/ProgressBar";
import ApperIcon from "@/components/ApperIcon";

const CourseCard = ({ 
  className,
  course,
  progress,
  onStartCourse,
  ...props 
}) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "beginner": return "success";
      case "intermediate": return "warning";
      case "advanced": return "error";
      default: return "default";
    }
  };

  const progressPercent = progress ? (progress.completedLessons / progress.totalLessons) * 100 : 0;
  const isStarted = progress && progress.completedLessons > 0;
  const isCompleted = progress && progress.completedLessons === progress.totalLessons;

  return (
    <Card className={cn("overflow-hidden hover:scale-[1.02] hover:shadow-medium transition-all duration-200", className)} {...props}>
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
          <div className="p-4 bg-gradient-to-br from-primary to-blue-600 rounded-full">
            <ApperIcon name="Play" size={32} className="text-white" />
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant={getDifficultyColor(course.difficulty)}>
            {course.difficulty}
          </Badge>
        </div>
        {isCompleted && (
          <div className="absolute top-3 left-3">
            <div className="p-2 bg-success rounded-full">
              <ApperIcon name="Check" size={16} className="text-white" />
            </div>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-heading-sm mb-2">{course.title}</CardTitle>
        <p className="text-body-sm text-gray-600 line-clamp-2">{course.description}</p>
      </CardHeader>
      
      <CardContent className="pt-0 pb-4">
        <div className="flex items-center justify-between text-body-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <ApperIcon name="User" size={14} />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ApperIcon name="Clock" size={14} />
            <span>{course.duration} min</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-body-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <ApperIcon name="BookOpen" size={14} />
            <span>{course.lessonsCount} lessons</span>
          </div>
          <div className="flex items-center space-x-1">
            <ApperIcon name="Tag" size={14} />
            <span>{course.category}</span>
          </div>
        </div>

        {progress && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-body-sm font-medium text-gray-700">Progress</span>
              <span className="text-body-sm text-gray-600">{Math.round(progressPercent)}%</span>
            </div>
            <ProgressBar value={progressPercent} variant="primary" size="md" />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button
          onClick={() => onStartCourse && onStartCourse(course)}
          variant={isCompleted ? "outline" : isStarted ? "primary" : "secondary"}
          className="w-full"
        >
          {isCompleted ? "Review Course" : isStarted ? "Continue Learning" : "Start Course"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;