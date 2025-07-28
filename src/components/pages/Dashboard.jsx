import React from "react";
import ApperIcon from "@/components/ApperIcon";
import RecentActivity from "@/components/organisms/RecentActivity";
import DashboardStats from "@/components/organisms/DashboardStats";
import Courses from "@/components/pages/Courses";
import Community from "@/components/pages/Community";
import Button from "@/components/atoms/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import ProgressBar from "@/components/atoms/ProgressBar";

function Dashboard() {
  const recentCourses = [
    { 
      id: 1, 
      title: "Advanced Content Strategy", 
      progress: 75, 
      totalLessons: 12, 
      completedLessons: 9, 
      thumbnail: "https://via.placeholder.com/80x60/0046FF/FFFFFF?text=Course" 
    }, 
    { 
      id: 2, 
      title: "Instagram Growth Tactics", 
      progress: 45, 
      totalLessons: 8, 
      completedLessons: 4, 
      thumbnail: "https://via.placeholder.com/80x60/FFC82C/000000?text=Course" 
    }, 
    { 
      id: 3, 
      title: "TikTok Viral Strategies", 
      progress: 100, 
      totalLessons: 15, 
      completedLessons: 15, 
      thumbnail: "https://via.placeholder.com/80x60/00C896/FFFFFF?text=Course" 
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-display-sm gradient-text">Dashboard</h1>
        <Button variant="primary" size="md">
          <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
          New Course
        </Button>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ApperIcon name="BookOpen" className="w-5 h-5" />
                Continue Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-12 h-9 rounded object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/80x60/E5E7EB/6B7280?text=IMG`;
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{course.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <ProgressBar value={course.progress} className="flex-1" />
                      <span className="text-xs text-gray-500">{course.progress}%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {course.completedLessons}/{course.totalLessons} lessons
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;