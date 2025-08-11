import {
  View,
  Text,
  TextInput,
  useWindowDimensions,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import styles from "../Sub_Elements/Styles";

import faculties from "../../University/json/faculties.json";

const newFalcuties = faculties.filter((u) => Number(u.id) < 5);
const Info = require("../../../assets/info.png");

const PopularCourse = () => {
  const width = useWindowDimensions().width;
  const numColumns = width > 650 ? 2 : 1;

  const renderCourseItem = ({ item }) => {
    return (
      <View
        style={[
          styles.popularCourseMainContainer,
          {
            width: width > 650 ? "50%" : "90%",
            alignSelf: "center", // center item horizontally
          },
        ]}
      >
        <View style={styles.popularCourseContainer}>
          <Pressable onPress={() => setIsModalVisible(true)}>
            <View style={styles.popularCourseHeadContainer}>
              <View style={styles.popularCourseTextContainer}>
                <Text
                  style={styles.popularCourseText}
                  numberOfLines={1}
                  ellipsizeMode="ellipsis"
                >{`${item.name}`}</Text>
              </View>
              <View style={styles.popularCourseInfoImageContainer}>
                <Image source={Info} style={styles.CourseInfoImage} />
              </View>
            </View>
          </Pressable>

          <View style={styles.popularCourseNormalContainer}>
            <View style={styles.popularCourseMainBox}>
              <View style={styles.popularCourseBox}>
                <Text style={styles.popularCourseNormalText}>
                  Total Fees Per Sem
                </Text>
                <Text style={styles.popularCourseOtherText}>
                  {item.fees || "GHC 3k"}
                </Text>
              </View>
              <View style={styles.popularCourseBox}>
                <Text style={styles.popularCourseNormalText}>
                  Mode Of Tuition
                </Text>
                <Text style={styles.popularCourseOtherText}>
                  {item.mode || "Full Time"}
                </Text>
              </View>
            </View>

            <View style={styles.popularCourseMainBox}>
              <View style={styles.popularCourseBox}>
                <Text style={styles.popularCourseNormalText}>
                  Course Duration
                </Text>
                <Text style={styles.popularCourseOtherText}>
                  {item.duration || "3 yrs"}
                </Text>
              </View>
              <View style={styles.popularCourseBox}>
                <Text style={styles.popularCourseNormalText}>
                  Average Salary
                </Text>
                <Text style={styles.popularCourseOtherText}>
                  {item.salary || "GHC 70k-90k"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.departmentMainContainer}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search For A Program Here..."
          style={styles.searchBar}
          numberOfLines={1}
        />
      </View>

      <View style={styles.facultyMainContainer}>
        <View style={styles.popularCOursesContainer}>
          <Text style={styles.overviewHeadTitle}>
            Popular Undergraduate Courses
          </Text>
        </View>
      </View>
      <FlatList
        data={newFalcuties}
        key={numColumns}
        numColumns={numColumns}
        renderItem={renderCourseItem}
      />
    </View>
  );
};

export default PopularCourse;
