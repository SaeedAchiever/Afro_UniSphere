import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";

import styles from "../Sub_Elements/Styles";
import { useNavigation } from "@react-navigation/native";
import CourseInfo from "./CourseInfo";

const Info = require("../../../assets/info.png");
const Close = require("../../../assets/close.png");

const AllCourses = () => {
  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const width = useWindowDimensions().width;
  return (
    <View style={styles.departmentMainContainer}>
      <View style={styles.facultyMainContainer}>
        <View style={styles.popularCOursesContainer}>
          <Text style={styles.overviewHeadTitle}>
            All Undergraduate Courses
          </Text>
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
                width: width > 650 ? "50%" : "90%",
              },
            ]}
          >
            <View style={styles.popularCourseContainer}>
                <Pressable
                  onPress={() => {
                    setIsModalVisible(true);
                  }}
                >
              <View style={styles.popularCourseHeadContainer}>
                <Text style={styles.popularCourseText}>
                  Business Administration
                </Text>
                  <Image source={Info} style={styles.CourseInfoImage} />
              </View>
                </Pressable>
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
                width: width > 650 ? "50%" : "90%",
              },
            ]}
          >
            <View style={styles.popularCourseContainer}>
              <View style={styles.popularCourseHeadContainer}>
                <Text style={styles.popularCourseText}>Civil Engineering</Text>
                <Pressable>
                  <Image source={Info} style={styles.CourseInfoImage} />
                </Pressable>
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
                width: width > 650 ? "50%" : "90%",
              },
            ]}
          >
            <View style={styles.popularCourseContainer}>
              <View style={styles.popularCourseHeadContainer}>
                <Text style={styles.popularCourseText}>
                  Business Adminisration
                </Text>
                <Pressable>
                  <Image source={Info} style={styles.CourseInfoImage} />
                </Pressable>
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
                width: width > 650 ? "50%" : "90%",
              },
            ]}
          >
            <View style={styles.popularCourseContainer}>
              <View style={styles.popularCourseHeadContainer}>
                <Text style={styles.popularCourseText}>Civil Engineering</Text>

                <Pressable>
                  <Image source={Info} style={styles.CourseInfoImage} />
                </Pressable>
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

      <View>
        <Modal
          visible={isModalVisible}
          onRequestClose={() => {
            navigation.goBack();
          }}
        >
          <View style={styles.CourseInfoContainer}>
            <Pressable
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={styles.CourseInfoCloseBTNContainer}
            >
              <Image source={Close} style={styles.CourseInfoCloseBTN} />
            </Pressable>
            <View style={styles.CourseInfoSubContainer}>
              <CourseInfo />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default AllCourses;
