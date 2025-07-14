import { View, Text, TextInput, useWindowDimensions } from "react-native";
import React from "react";
import styles from "../Sub_Elements/Styles";

const PopularCourse = () => {
  const width = useWindowDimensions().width;

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
          <Text style={styles.overviewHeadTitle}>B.Tech Courses</Text>
        </View>

        <View
          style={[
            styles.MainPopularContainer,
            {
              flexDirection: width > 650 ? "row" : "column",
            },
          ]}
        >
          <View
            style={[
              styles.popularCourseMainContainer,
              {
                width: width > 600 ? "50%" : "90%",
              },
            ]}
          >
            <View style={styles.popularCourseContainer}>
              <View style={styles.popularCourseContainer}>
                <Text style={styles.popularCourseText}>
                  Business Adminisration
                </Text>
              </View>
              <View style={styles.popularCourseNormalContainer}>
                <View style={styles.popularCourseMainBox}>
                  <View style={styles.popularCourseBox}>
                    <Text style={styles.popularCourseNormalText}>
                      Total Fees Per Sem
                    </Text>
                    <Text style={styles.popularCourseOtherText}>GHC 3k</Text>
                  </View>
                  <View style={styles.popularCourseBox}>
                    <Text style={styles.popularCourseNormalText}>
                      Mode Of Tuition
                    </Text>
                    <Text style={styles.popularCourseOtherText}>Full Time</Text>
                  </View>
                </View>
                <View style={styles.popularCourseMainBox}>
                  <View style={styles.popularCourseBox}>
                    <Text style={styles.popularCourseNormalText}>
                      Course Duration
                    </Text>
                    <Text style={styles.popularCourseOtherText}>3 yrs</Text>
                  </View>
                  <View style={styles.popularCourseBox}>
                    <Text style={styles.popularCourseNormalText}>
                      Average Salary
                    </Text>
                    <Text style={styles.popularCourseOtherText}>
                      GHC 70k-90k
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* MMM */}

          <View
            style={[
              styles.popularCourseMainContainer,
              {
                width: width > 600 ? "45%" : "90%",
              },
            ]}
          >
            <View style={styles.popularCourseContainer}>
              <View style={styles.popularCourseContainer}>
                <Text style={styles.popularCourseText}>Civil Engineering</Text>
              </View>
              <View style={styles.popularCourseNormalContainer}>
                <View style={styles.popularCourseMainBox}>
                  <View style={styles.popularCourseBox}>
                    <Text style={styles.popularCourseNormalText}>
                      Total Fees Per Sem
                    </Text>
                    <Text style={styles.popularCourseOtherText}>GHC 3k</Text>
                  </View>
                  <View style={styles.popularCourseBox}>
                    <Text style={styles.popularCourseNormalText}>
                      Mode Of Tuition
                    </Text>
                    <Text style={styles.popularCourseOtherText}>Full Time</Text>
                  </View>
                </View>
                <View style={styles.popularCourseMainBox}>
                  <View style={styles.popularCourseBox}>
                    <Text style={styles.popularCourseNormalText}>
                      Course Duration
                    </Text>
                    <Text style={styles.popularCourseOtherText}>3 yrs</Text>
                  </View>
                  <View style={styles.popularCourseBox}>
                    <Text style={styles.popularCourseNormalText}>
                      Average Salary
                    </Text>
                    <Text style={styles.popularCourseOtherText}>
                      GHC 70k-90k
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PopularCourse;
