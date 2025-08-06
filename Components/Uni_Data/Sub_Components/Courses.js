import { View, Text, Image, useWindowDimensions } from "react-native";
import React, { useState, useCallback, memo } from "react";
import styles from "../Sub_Elements/Styles";
import Arrow from "../../../assets/list.png";

import coursesData from "../../University/json/faculties.json";
import CoursesTable from "./CoursesTable";
import PopularCourse from "./PopularCourse";

const Courses = ({ university }) => {
  const [selectedDegreeType, setSelectedDegreeType] = useState("Undergraduate");
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Added search state

  const filterCoursesByUniversity = useCallback((data, universityName) => {
    const universityData = data.find((univ) => univ.name === universityName);
    if (!universityData || !universityData.faculties) {
      return [];
    }

    return universityData.faculties.map((faculty) => ({
      faculty_name: faculty.faculty_name,
      note: faculty.note,
      undergraduateCourses: faculty.courses.filter(
        (course) => course.course_type === "undergraduate"
      ),
      mastersCourses: faculty.courses.filter(
        (course) => course.course_type === "masters"
      ),
      phdCourses: faculty.courses.filter(
        (course) => course.course_type === "phd"
      ),
      certificateCourses: faculty.courses.filter(
        (course) => course.course_type === "certificate"
      ),
      diplomaCourses: faculty.courses.filter(
        (course) => course.course_type === "diploma"
      ),
      hndCourses: faculty.courses.filter(
        (course) => course.course_type === "hnd"
      ),
    }));
  }, []);

  const groupedCourses = filterCoursesByUniversity(
    coursesData,
    university.name
  );

  const getCoursesBySelectedType = (group) => {
    switch (selectedDegreeType) {
      case "Undergraduate":
        return group.undergraduateCourses;
      case "Masters":
        return group.mastersCourses;
      case "Phd/MPhil":
        return group.phdCourses;
      case "Certificate":
        return group.certificateCourses;
      case "Diploma":
        return group.diplomaCourses;
      case "HND":
        return group.hndCourses;
      default:
        return [];
    }
  };

  const allCourses = groupedCourses.reduce((acc, group) => {
    const courses = getCoursesBySelectedType(group).map((course) => ({
      ...course,
      faculty_name: group.faculty_name,
      note: group.note,
    }));
    return acc.concat(courses);
  }, []);

  // Filter courses based on search term
  const filteredCourses = allCourses.filter((course) =>
    course.course_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCourses = showAllCourses
    ? filteredCourses
    : filteredCourses.slice(0, 15);
  const coursesAvailable = displayedCourses.length > 0;

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <View style={[styles.overviewHeadTitleContainer, { marginTop: 50 }]}>
        <Image source={Arrow} style={styles.overviewHeadImage} />
        <Text style={styles.overviewHeadTitle}>Programmes / Courses</Text>
      </View>

      <View style={styles.overviewSmallTextContainer}>
        <Text style={styles.overviewSmall}>
          Enim nulla esse occaecat eiusmod nisi. Laboris mollit dolore ex amet
          veniam exercitation sint adipisicing amet veniam quis deserunt esse.
        </Text>
      </View>

      <View style={styles.departmentMainContainer}>
        <PopularCourse />
        <CoursesTable />
      </View>
    </View>
  );
};

export default memo(Courses);
