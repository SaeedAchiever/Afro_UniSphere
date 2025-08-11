import React, { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  Image,
  FlatList,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../Sub_Elements/Styles";
import CourseInfo from "./CourseInfo";
import faculties from "../../University/json/faculties.json";

const Info = require("../../../assets/info.png");
const Close = require("../../../assets/close.png");

const AllCourses = () => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width;

  const [isModalVisible, setIsModalVisible] = useState(false);

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
        {/* Modal */}
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={false}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.CourseInfoContainer}>
            <Pressable
              onPress={() => setIsModalVisible(false)}
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
    );
  };

  return (
    <View style={styles.departmentMainContainer}>
      <View style={styles.facultyMainContainer}>
        <View style={styles.popularCOursesContainer}>
          <Text style={styles.overviewHeadTitle}>
            All Undergraduate Courses
          </Text>
        </View>

        <FlatList
          data={faculties}
          numColumns={numColumns}
          key={numColumns}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCourseItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
};

export default AllCourses;
