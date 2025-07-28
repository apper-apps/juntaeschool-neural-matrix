import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import ActivityItem from "@/components/molecules/ActivityItem";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { getRecentActivities } from "@/services/api/activityService";

const RecentActivity = ({ className, ...props }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadActivities = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getRecentActivities();
      setActivities(data);
} catch (err) {
      setError("최근 활동을 불러오는데 실패했습니다");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivities();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadActivities} />;
  if (activities.length === 0) return <Empty message="No recent activity" />;

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center space-x-2">
<ApperIcon name="Activity" size={20} className="text-primary" />
          <span>최근 활동</span>
        </CardTitle>
        <Button variant="ghost" size="sm">
          <ApperIcon name="MoreHorizontal" size={16} />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-96 overflow-y-auto">
          {activities.map((activity) => (
            <ActivityItem key={activity.Id} activity={activity} />
          ))}
        </div>
        <div className="p-4 border-t border-gray-100">
          <Button variant="ghost" className="w-full">
모든 활동 보기
            <ApperIcon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;