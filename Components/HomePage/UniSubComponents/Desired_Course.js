import { View, Text, FlatList, Modal, Pressable } from "react-native";
import React, { useState } from "react";

import CourseModal from "./CourseModal";

import styles from "../HomeStyle";
import { allcourses } from "./Data";

const Desired_Course = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalVisible(true);
  };

  return (
    <View style={styles.recommendationMainContainer}>
      <View style={styles.recommendationHeadContainer}>
        <View>
          <Text style={styles.HomeScholarshipHeaderText}>
            Get Matched Courses
          </Text>
        </View>
      </View>

      {/* Scroll Body */}
      <FlatList
        data={allcourses}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => openModal(item)}>
              <View style={styles.scrollBodyContainer}>
                <View>
                  <Text style={styles.scrollBodyDistText}>{`On Campus`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.scrollBodyCourseText}
                  >{`${item.name}`}</Text>
                </View>
                <View
                  style={[styles.scrollUniAvailContainer, { paddingTop: 10 }]}
                >
                  <Text
                    style={styles.scrollBodyDistText}
                  >{`Universities Available`}</Text>
                  <Text
                    style={styles.scrollBodyDistText}
                  >{`${item.data.length}`}</Text>
                </View>
                <View style={styles.scrollUniAvailContainer}>
                  <Text
                    style={styles.scrollBodyDistText}
                  >{`Course Duration`}</Text>
                  <Text
                    style={styles.scrollBodyDistText}
                  >{`${item.duration} years`}</Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />

      <Modal
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            setIsModalVisible={setIsModalVisible}
            onClose={() => setIsModalVisible(false)}
          />
        )}
      </Modal>
    </View>
  );
};

export default Desired_Course;
