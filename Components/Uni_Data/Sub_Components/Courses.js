import { View, Text, Image, useWindowDimensions } from "react-native";
import React, { useState, useCallback, memo } from "react";
import styles from "../Sub_Elements/Styles";
import Arrow from "../../../assets/list.png";

import coursesData from "../../University/json/faculties.json";
import CoursesTable from "./CoursesTable";
import PopularCourse from "./PopularCourse";

const Courses = ({ university }) => {
  

  return (
    <View style={{ flex: 1 }}>
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
