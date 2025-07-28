import React from "react";
import { formatDistanceToNow } from "date-fns";
import ApperIcon from "@/components/ApperIcon";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";

function Community() {
  const discussions = [
    { 
      id: 1, 
      title: "Best practices for TikTok content", 
      author: "Sarah Johnson", 
      avatar: "https://via.placeholder.com/40x40/0046FF/FFFFFF?text=SJ", 
      replies: 23, 
      likes: 45, 
      category: "TikTok", 
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), 
      isHot: true 
    }, 
    { 
      id: 2, 
      title: "How to create viral Instagram Reels", 
      author: "Mike Chen", 
      avatar: "https://via.placeholder.com/40x40/FFC82C/000000?text=MC", 
      replies: 18, 
      likes: 32, 
      category: "Instagram", 
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), 
      isHot: false 
    }, 
    { 
      id: 3, 
      title: "Monetization strategies for creators", 
      author: "Emma Davis", 
      avatar: "https://via.placeholder.com/40x40/00C896/FFFFFF?text=ED", 
      replies: 34, 
      likes: 67, 
      category: "Business", 
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), 
      isHot: true 
    },
    { 
      id: 4, 
      title: "Building authentic engagement", 
      author: "Ryan Kim", 
      avatar: "https://via.placeholder.com/40x40/FF6B35/FFFFFF?text=RK", 
      replies: 12, 
      likes: 28, 
      category: "General", 
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), 
      isHot: false 
    }
  ];

  const topMembers = [
    { 
      name: "Alex Rodriguez", 
      avatar: "https://via.placeholder.com/50x50/0046FF/FFFFFF?text=AR", 
      points: 2847, 
      badge: "Expert Creator", 
      posts: 45 
    }, 
    { 
      name: "Luna Park", 
      avatar: "https://via.placeholder.com/50x50/FFC82C/000000?text=LP", 
      points: 2156, 
      badge: "Community Helper", 
      posts: 38 
    }, 
    { 
      name: "Jordan Smith", 
      avatar: "https://via.placeholder.com/50x50/00C896/FFFFFF?text=JS", 
      points: 1923, 
      badge: "Rising Star", 
      posts: 29 
    }
  ];

  const categories = [
    { name: "General Discussion", count: 124, icon: "MessageCircle", color: "primary" }, 
    { name: "TikTok", count: 89, icon: "Music", color: "secondary" }, 
    { name: "Instagram", count: 156, icon: "Camera", color: "success" }, 
    { name: "YouTube", count: 203, icon: "Play", color: "error" }, 
    { name: "Business", count: 78, icon: "TrendingUp", color: "warning" }, 
    { name: "Tools & Resources", count: 45, icon: "Tool", color: "info" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-display-sm gradient-text">Community</h1>
        <Button variant="primary" size="md">
          <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
          New Discussion
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ApperIcon name="MessageSquare" className="w-5 h-5" />
                Recent Discussions
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
                          Hot
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>by {discussion.author}</span>
                      <Badge variant={discussion.category === 'TikTok' ? 'secondary' : discussion.category === 'Instagram' ? 'success' : 'primary'} size="sm">
                        {discussion.category}
                      </Badge>
                      <span>{formatDistanceToNow(discussion.timestamp)} ago</span>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <ApperIcon name="MessageCircle" className="w-4 h-4" />
                        {discussion.replies} replies
                      </span>
                      <span className="flex items-center gap-1">
                        <ApperIcon name="Heart" className="w-4 h-4" />
                        {discussion.likes} likes
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
                Top Members
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
                    <p className="text-xs text-gray-500">{member.points} points</p>
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
                Categories
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