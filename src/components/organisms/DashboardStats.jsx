import React from "react";
import { cn } from "@/utils/cn";
import StatCard from "@/components/molecules/StatCard";

const DashboardStats = ({ className, stats, ...props }) => {
  const defaultStats = [
    {
      title: "Courses Enrolled",
      value: "12",
      change: "+2 this month",
      changeType: "positive",
      icon: "BookOpen",
      gradient: "primary"
    },
    {
      title: "Lessons Completed",
      value: "89",
      change: "+15 this week",
      changeType: "positive", 
      icon: "CheckCircle",
      gradient: "success"
    },
    {
      title: "Learning Streak",
      value: "7 days",
      change: "Keep it up!",
      changeType: "positive",
      icon: "Flame",
      gradient: "secondary"
    },
    {
      title: "Certificates Earned",
      value: "3",
      change: "+1 this month",
      changeType: "positive",
      icon: "Award",
      gradient: "warning"
    }
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", className)} {...props}>
      {displayStats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          changeType={stat.changeType}
          icon={stat.icon}
          gradient={stat.gradient}
        />
      ))}
    </div>
  );
};

export default DashboardStats;