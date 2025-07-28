import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import CourseCard from "@/components/molecules/CourseCard";
import SearchBar from "@/components/molecules/SearchBar";
import FilterDropdown from "@/components/molecules/FilterDropdown";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { getAllCourses } from "@/services/api/courseService";
import { getUserProgress } from "@/services/api/progressService";
import { toast } from "react-toastify";

const CourseGrid = ({ className, ...props }) => {
  const [courses, setCourses] = useState([]);
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [coursesData, progressData] = await Promise.all([
        getAllCourses(),
        getUserProgress()
      ]);
      setCourses(coursesData);
      setProgress(progressData);
    } catch (err) {
      setError("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStartCourse = (course) => {
    toast.success(`Started course: ${course.title}`);
  };

  // Filter courses based on search and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || course.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  // Get unique categories and difficulties for filters
  const categories = [...new Set(courses.map(course => course.category))];
  const difficulties = [...new Set(courses.map(course => course.difficulty))];

  const categoryOptions = [
    { value: "", label: "All Categories" },
    ...categories.map(cat => ({ value: cat, label: cat }))
  ];

  const difficultyOptions = [
    { value: "", label: "All Levels" },
    ...difficulties.map(diff => ({ value: diff, label: diff }))
  ];

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadData} />;

  return (
    <div className={cn("space-y-6", className)} {...props}>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <SearchBar
            placeholder="Search courses..."
            onSearch={setSearchTerm}
            className="w-full sm:max-w-md"
          />
          <div className="flex gap-4">
            <FilterDropdown
              options={categoryOptions}
              value={selectedCategory}
              onSelect={(option) => setSelectedCategory(option.value)}
              placeholder="Category"
              className="w-48"
            />
            <FilterDropdown
              options={difficultyOptions}
              value={selectedDifficulty}
              onSelect={(option) => setSelectedDifficulty(option.value)}
              placeholder="Level"
              className="w-48"
            />
          </div>
        </div>
      </div>

      {/* Course Grid */}
      {filteredCourses.length === 0 ? (
        <Empty 
          message="No courses found" 
          description="Try adjusting your search or filter criteria."
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const courseProgress = progress.find(p => p.courseId === course.Id);
            return (
              <CourseCard
                key={course.Id}
                course={course}
                progress={courseProgress}
                onStartCourse={handleStartCourse}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CourseGrid;