import React from "react";
import { cn } from "@/utils/cn";
import StatCard from "@/components/molecules/StatCard";

const DashboardStats = ({ className, stats, ...props }) => {
const defaultStats = [
    {
      title: "등록한 코스",
      value: "12",
      change: "+2 이번 달",
      changeType: "positive",
      icon: "BookOpen",
      gradient: "primary"
    },
    {
      title: "완료한 강의",
      value: "89",
      change: "+15 이번 주",
      changeType: "positive", 
      icon: "CheckCircle",
      gradient: "success"
    },
    {
      title: "학습 연속일",
      value: "7일",
      change: "계속 유지하세요!",
      changeType: "positive",
      icon: "Flame",
      gradient: "secondary"
    },
    {
      title: "획득한 수료증",
      value: "3",
      change: "+1 이번 달",
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