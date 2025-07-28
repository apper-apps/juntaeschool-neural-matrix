import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import { formatDistanceToNow } from "date-fns";

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "Best practices for TikTok content creation?",
      author: "Sarah Johnson",
      avatar: "/api/placeholder/40/40",
      replies: 23,
      likes: 45,
      category: "TikTok",
      timestamp: new Date(2024, 0, 15),
      isHot: true
    },
    {
      id: 2,
      title: "How to create viral Instagram Reels",
      author: "Mike Chen",
      avatar: "/api/placeholder/40/40",
      replies: 18,
      likes: 32,
      category: "Instagram",
      timestamp: new Date(2024, 0, 14),
      isHot: false
    },
    {
      id: 3,
      title: "Monetization strategies for content creators",
      author: "Emma Davis",
      avatar: "/api/placeholder/40/40",
      replies: 34,
      likes: 67,
      category: "Business",
      timestamp: new Date(2024, 0, 13),
      isHot: true
    },
    {
      id: 4,
      title: "Building authentic connections with your audience",
      author: "David Wilson",
      avatar: "/api/placeholder/40/40",
      replies: 12,
      likes: 28,
      category: "Engagement",
      timestamp: new Date(2024, 0, 12),
      isHot: false
    }
  ];

  const topMembers = [
    {
      name: "Alex Rodriguez",
      avatar: "/api/placeholder/50/50",
      points: 2847,
      badge: "Expert Creator",
      posts: 45
    },
    {
      name: "Luna Park",
      avatar: "/api/placeholder/50/50",
      points: 2156,
      badge: "Community Helper",
      posts: 38
    },
    {
      name: "Jordan Smith",
      avatar: "/api/placeholder/50/50",
      points: 1923,
      badge: "Rising Star",
      posts: 29
    }
  ];

  const categories = [
    { name: "General Discussion", count: 124, icon: "MessageCircle", color: "primary" },
    { name: "TikTok", count: 89, icon: "Music", color: "secondary" },
    { name: "Instagram", count: 156, icon: "Camera", color: "success" },
    { name: "YouTube", count: 67, icon: "Video", color: "error" },
    { name: "Business", count: 43, icon: "Briefcase", color: "warning" },
    { name: "Tools & Resources", count: 78, icon: "Tool", color: "info" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-display-md text-gray-900 mb-2">Community</h1>
          <p className="text-body-lg text-gray-600">
            Connect, learn, and grow with fellow content creators
          </p>
        </div>
        <Button variant="primary">
          <ApperIcon name="Plus" size={16} className="mr-2" />
          Start Discussion
        </Button>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-gradient-to-br from-primary to-blue-600 rounded-full w-fit mx-auto mb-4">
              <ApperIcon name="Users" size={24} className="text-white" />
            </div>
            <p className="text-display-sm font-bold gradient-text mb-1">1,247</p>
            <p className="text-body-sm text-gray-600">Active Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-gradient-to-br from-success to-green-600 rounded-full w-fit mx-auto mb-4">
              <ApperIcon name="MessageCircle" size={24} className="text-white" />
            </div>
            <p className="text-display-sm font-bold gradient-text mb-1">3,892</p>
            <p className="text-body-sm text-gray-600">Discussions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 bg-gradient-to-br from-secondary to-yellow-400 rounded-full w-fit mx-auto mb-4">
              <ApperIcon name="Zap" size={24} className="text-gray-900" />
            </div>
            <p className="text-display-sm font-bold gradient-text mb-1">24/7</p>
            <p className="text-body-sm text-gray-600">Community Support</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ApperIcon name="Folder" size={20} className="text-primary" />
                <span>Categories</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br from-${category.color} to-${category.color}/80`}>
                        <ApperIcon name={category.icon} size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{category.name}</p>
                        <p className="text-sm text-gray-600">{category.count} posts</p>
                      </div>
                    </div>
                    <ApperIcon name="ArrowRight" size={16} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Discussions */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <ApperIcon name="MessageSquare" size={20} className="text-primary" />
                <span>Recent Discussions</span>
              </CardTitle>
              <Button variant="ghost" size="sm">
                <ApperIcon name="Filter" size={16} />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={discussion.avatar} alt={discussion.author} />
                        <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium text-gray-900 truncate">{discussion.title}</h3>
                          {discussion.isHot && <Badge variant="error">Hot</Badge>}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span>by {discussion.author}</span>
                          <Badge variant="outline">{discussion.category}</Badge>
                          <span>{formatDistanceToNow(discussion.timestamp, { addSuffix: true })}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <ApperIcon name="MessageCircle" size={14} />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ApperIcon name="Heart" size={14} />
                            <span>{discussion.likes} likes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Members */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ApperIcon name="Star" size={20} className="text-secondary" />
                <span>Top Members</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-secondary to-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-900">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.badge}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{member.points} points</span>
                      <span>•</span>
                      <span>{member.posts} posts</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Community Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ApperIcon name="Shield" size={20} className="text-info" />
                <span>Community Guidelines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <ApperIcon name="CheckCircle" size={16} className="text-success flex-shrink-0 mt-0.5" />
                  <p>Be respectful and supportive to all members</p>
                </div>
                <div className="flex items-start space-x-2">
                  <ApperIcon name="CheckCircle" size={16} className="text-success flex-shrink-0 mt-0.5" />
                  <p>Share knowledge and help others learn</p>
                </div>
                <div className="flex items-start space-x-2">
                  <ApperIcon name="CheckCircle" size={16} className="text-success flex-shrink-0 mt-0.5" />
                  <p>Keep discussions relevant and constructive</p>
                </div>
                <div className="flex items-start space-x-2">
                  <ApperIcon name="X" size={16} className="text-error flex-shrink-0 mt-0.5" />
                  <p>No spam, self-promotion, or offensive content</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;