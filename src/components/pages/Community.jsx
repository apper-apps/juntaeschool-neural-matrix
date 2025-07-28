import React from "react";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import ApperIcon from "@/components/ApperIcon";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";

function Community() {
  const discussions = [
{ 
      id: 1, 
      title: "틱톡 콘텐츠 베스트 프랙티스", 
      author: "김사라", 
      avatar: "https://via.placeholder.com/40x40/0046FF/FFFFFF?text=김사", 
      replies: 23, 
      likes: 45, 
      category: "틱톡", 
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), 
      isHot: true 
    }, 
    { 
      id: 2, 
      title: "바이럴 인스타그램 릴스 만드는 방법", 
      author: "박마이크", 
      avatar: "https://via.placeholder.com/40x40/FFC82C/000000?text=박마", 
      replies: 18, 
      likes: 32, 
      category: "인스타그램", 
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), 
      isHot: false 
    }, 
    { 
      id: 3, 
      title: "크리에이터를 위한 수익화 전략", 
      author: "최엠마", 
      avatar: "https://via.placeholder.com/40x40/00C896/FFFFFF?text=최엠", 
      replies: 34, 
      likes: 67, 
      category: "비즈니스", 
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), 
      isHot: true 
    },
    { 
      id: 4, 
      title: "진정성 있는 참여도 구축하기", 
      author: "김라이언", 
      avatar: "https://via.placeholder.com/40x40/FF6B35/FFFFFF?text=김라", 
      replies: 12, 
      likes: 28, 
      category: "일반", 
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), 
      isHot: false 
    }
  ];

const topMembers = [
    { 
      name: "김알렉스", 
      avatar: "https://via.placeholder.com/50x50/0046FF/FFFFFF?text=김알", 
      points: 2847, 
      badge: "전문 크리에이터", 
      posts: 45 
    }, 
    { 
      name: "박루나", 
      avatar: "https://via.placeholder.com/50x50/FFC82C/000000?text=박루", 
      points: 2156, 
      badge: "커뮤니티 헬퍼", 
      posts: 38 
    }, 
    { 
      name: "이조던", 
      avatar: "https://via.placeholder.com/50x50/00C896/FFFFFF?text=이조", 
      points: 1923, 
      badge: "떠오르는 스타", 
      posts: 29 
    }
  ];

const categories = [
    { name: "일반 토론", count: 124, icon: "MessageCircle", color: "primary" }, 
    { name: "틱톡", count: 89, icon: "Music", color: "secondary" }, 
    { name: "인스타그램", count: 156, icon: "Camera", color: "success" }, 
    { name: "유튜브", count: 203, icon: "Play", color: "error" }, 
    { name: "비즈니스", count: 78, icon: "TrendingUp", color: "warning" }, 
    { name: "도구 및 리소스", count: 45, icon: "Tool", color: "info" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
<h1 className="text-display-sm gradient-text">커뮤니티</h1>
        <Button variant="primary" size="md">
          <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
          새 토론
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ApperIcon name="MessageSquare" className="w-5 h-5" />
최근 토론
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:border-primary/20 transition-colors">
                  <Avatar>
                    <AvatarImage 
                      src={discussion.avatar} 
                      alt={discussion.author}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/40x40/E5E7EB/6B7280?text=${discussion.author.split(' ').map(n => n[0]).join('')}`;
                      }}
                    />
                    <AvatarFallback>
                      {discussion.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium hover:text-primary cursor-pointer truncate">
                        {discussion.title}
                      </h3>
                      {discussion.isHot && (
                        <Badge variant="error" size="sm">
                          <ApperIcon name="Flame" className="w-3 h-3 mr-1" />
인기
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
<span>작성자: {discussion.author}</span>
                      <Badge variant={discussion.category === '틱톡' ? 'secondary' : discussion.category === '인스타그램' ? 'success' : 'primary'} size="sm">
                        {discussion.category}
                      </Badge>
                      <span>{formatDistanceToNow(discussion.timestamp, { addSuffix: true, locale: ko })}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
<ApperIcon name="MessageCircle" className="w-4 h-4" />
                        {discussion.replies}개 답글
                      </span>
                      <span className="flex items-center gap-1">
                        <ApperIcon name="Heart" className="w-4 h-4" />
                        {discussion.likes}개 좋아요
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ApperIcon name="Users" className="w-5 h-5" />
상위 멤버
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topMembers.map((member, index) => (
                <div key={member.name} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    {index + 1}
                  </div>
                  <Avatar className="w-10 h-10">
                    <AvatarImage 
                      src={member.avatar} 
                      alt={member.name}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/50x50/E5E7EB/6B7280?text=${member.name.split(' ').map(n => n[0]).join('')}`;
                      }}
                    />
                    <AvatarFallback>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{member.name}</h4>
<p className="text-xs text-gray-500">{member.points} 포인트</p>
                    <Badge variant="success" size="xs" className="mt-1">
                      {member.badge}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
<ApperIcon name="Grid" className="w-5 h-5" />
                카테고리
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-2">
                    <ApperIcon name={category.icon} className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <Badge variant={category.color} size="sm">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Community;