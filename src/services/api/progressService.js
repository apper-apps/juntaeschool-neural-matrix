import progressData from "@/services/mockData/progress.json";

export const getUserProgress = async () => {
  await new Promise(resolve => setTimeout(resolve, 250));
  return [...progressData];
};

export const getCourseProgress = async (courseId) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  const progress = progressData.find(p => p.courseId === courseId.toString());
  return progress ? { ...progress } : null;
};

export const updateProgress = async (courseId, lessonCount) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  const progressIndex = progressData.findIndex(p => p.courseId === courseId.toString());
  
  if (progressIndex !== -1) {
    progressData[progressIndex] = {
      ...progressData[progressIndex],
      completedLessons: lessonCount,
      lastAccessed: new Date().toISOString(),
      percentComplete: Math.round((lessonCount / progressData[progressIndex].totalLessons) * 100)
    };
    return { ...progressData[progressIndex] };
  }
  
  throw new Error("Progress record not found");
};