import React from "react";
import CourseGrid from "@/components/organisms/CourseGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const Courses = () => {
  const coursePaths = [
{
      title: "콘텐츠 제작 기초",
      description: "매력적인 콘텐츠 제작의 기본기를 마스터하세요",
      courseCount: 8,
      difficulty: "초급",
      icon: "PenTool",
      color: "success"
    },
    {
      title: "소셜 미디어 마스터",
      description: "소셜 미디어 성장을 위한 고급 전략",
      courseCount: 12,
      difficulty: "중급",
      icon: "Share2",
      color: "warning"
    },
    {
      title: "인플루언서 비즈니스",
      description: "영향력을 수익화하고 브랜드를 구축하세요",
      courseCount: 6,
      difficulty: "고급",
      icon: "TrendingUp",
      color: "error"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
<h1 className="font-display text-display-md text-gray-900 mb-2">코스 라이브러리</h1>
          <p className="text-body-lg text-gray-600">
            포괄적인 콘텐츠 제작 코스 컬렉션에서 발견하고 학습하세요
          </p>
        </div>
      </div>

      {/* Learning Paths */}
      <div>
<h2 className="font-display text-heading-lg text-gray-900 mb-6">학습 경로</h2>
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
{path.courseCount}개 코스
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
<h2 className="font-display text-heading-lg text-gray-900">모든 코스</h2>
          <div className="flex items-center space-x-2 text-body-sm text-gray-600">
            <ApperIcon name="BookOpen" size={16} />
            <span>24개 코스 이용 가능</span>
          </div>
        </div>
        <CourseGrid />
      </div>
    </div>
  );
};

export default Courses;