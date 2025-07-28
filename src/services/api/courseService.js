import coursesData from "@/services/mockData/courses.json";

export const getAllCourses = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return [...coursesData];
};

export const getCourseById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  const course = coursesData.find(c => c.Id === parseInt(id));
  if (!course) {
    throw new Error("Course not found");
  }
  return { ...course };
};

export const getCoursesByCategory = async (category) => {
  await new Promise(resolve => setTimeout(resolve, 250));
  return coursesData.filter(course => course.category === category).map(c => ({ ...c }));
};

export const searchCourses = async (query) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  const lowercaseQuery = query.toLowerCase();
  return coursesData.filter(course => 
    course.title.toLowerCase().includes(lowercaseQuery) ||
    course.description.toLowerCase().includes(lowercaseQuery) ||
    course.category.toLowerCase().includes(lowercaseQuery)
  ).map(c => ({ ...c }));
};