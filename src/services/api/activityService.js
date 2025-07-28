import activitiesData from "@/services/mockData/activities.json";

export const getRecentActivities = async () => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return [...activitiesData].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
};

export const getUserActivities = async (limit = 10) => {
  await new Promise(resolve => setTimeout(resolve, 250));
  return [...activitiesData]
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, limit);
};

export const addActivity = async (activityData) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  const highestId = Math.max(...activitiesData.map(a => a.Id));
  const newActivity = {
    Id: highestId + 1,
    ...activityData,
    timestamp: new Date().toISOString()
  };
  activitiesData.push(newActivity);
  return { ...newActivity };
};