import React from "react";
import DashboardStats from "@/components/organisms/DashboardStats";
import RecentActivity from "@/components/organisms/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import ProgressBar from "@/components/atoms/ProgressBar";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Dashboard = () => {
  const recentCourses = [
    {
      id: 1,
      title: "Advanced Content Strategy",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      thumbnail: "/api/placeholder/80/80"
    },
    {
      id: 2,
      title: "Instagram Growth Tactics",
      progress: 45,
      totalLessons: 8,
      completedLessons: 4,
      thumbnail: "/api/placeholder/80/80"
    },
    {
      id: 3,
      title: "TikTok Viral Strategies",
      progress: 100,
      totalLessons: 15,
      completedLessons: 15,
      thumbnail: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-display-md mb-2">Welcome back, Alex! 👋</h1>
            <p className="text-lg text-blue-100 mb-4">
              You're doing great! Keep up your learning streak.
            </p>
            <Button variant="secondary" size="lg">
              <ApperIcon name="Play" size={20} className="mr-2" />
              Continue Learning
            </Button>
          </div>
          <div className="hidden md:block">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <ApperIcon name="Trophy" size={64} className="text-secondary" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Progress */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <ApperIcon name="BookOpen" size={20} className="text-primary" />
              <span>Continue Learning</span>
            </CardTitle>
            <Button variant="ghost" size="sm">
              <ApperIcon name="MoreHorizontal" size={16} />
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {recentCourses.map((course) => (
              <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                  <ApperIcon name="Play" size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{course.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {course.completedLessons} of {course.totalLessons} lessons
                  </p>
                  <ProgressBar 
                    value={course.progress} 
                    variant="primary" 
                    size="sm"
                  />
                </div>
                <Button variant="ghost" size="sm">
                  <ApperIcon name="ArrowRight" size={16} />
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Courses
              <ApperIcon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <RecentActivity />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ApperIcon name="Zap" size={20} className="text-secondary" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-24 flex-col space-y-2">
              <ApperIcon name="Search" size={24} className="text-primary" />
              <span>Browse Courses</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col space-y-2">
              <ApperIcon name="Users" size={24} className="text-success" />
              <span>Join Community</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col space-y-2">
              <ApperIcon name="Award" size={24} className="text-warning" />
              <span>View Certificates</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col space-y-2">
              <ApperIcon name="Settings" size={24} className="text-info" />
              <span>Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;