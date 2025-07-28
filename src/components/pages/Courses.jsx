import React from "react";
import CourseGrid from "@/components/organisms/CourseGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const Courses = () => {
  const coursePaths = [
    {
      title: "Content Creation Fundamentals",
      description: "Master the basics of creating engaging content",
      courseCount: 8,
      difficulty: "Beginner",
      icon: "PenTool",
      color: "success"
    },
    {
      title: "Social Media Mastery",
      description: "Advanced strategies for social media growth",
      courseCount: 12,
      difficulty: "Intermediate",
      icon: "Share2",
      color: "warning"
    },
    {
      title: "Influencer Business",
      description: "Monetize your influence and build a brand",
      courseCount: 6,
      difficulty: "Advanced",
      icon: "TrendingUp",
      color: "error"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-display-md text-gray-900 mb-2">Course Library</h1>
          <p className="text-body-lg text-gray-600">
            Discover and learn from our comprehensive collection of content creation courses
          </p>
        </div>
      </div>

      {/* Learning Paths */}
      <div>
        <h2 className="font-display text-heading-lg text-gray-900 mb-6">Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {coursePaths.map((path, index) => (
            <Card key={index} className="hover:scale-[1.02] transition-transform duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-${path.color} to-${path.color}/80`}>
                    <ApperIcon name={path.icon} size={24} className="text-white" />
                  </div>
                  <Badge variant={path.color === "success" ? "success" : path.color === "warning" ? "warning" : "error"}>
                    {path.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-heading-sm">{path.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-gray-600 mb-4">{path.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-gray-500">
                    {path.courseCount} courses
                  </span>
                  <ApperIcon name="ArrowRight" size={16} className="text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Courses */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-heading-lg text-gray-900">All Courses</h2>
          <div className="flex items-center space-x-2 text-body-sm text-gray-600">
            <ApperIcon name="BookOpen" size={16} />
            <span>24 courses available</span>
          </div>
        </div>
        <CourseGrid />
      </div>
    </div>
  );
};

export default Courses;