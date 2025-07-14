import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

import styles from "../Sub_Elements/Styles";

const CoursesTable = () => {
  
  return (
    <View style={styles.degreeTypeMainContainer}>
      <View
        style={[
          styles.degreeTypeSubContainers,
          {
            backgroundColor: "rgba(0,0,0,0.08)",
          },
        ]}
      >
        <View style={styles.degreeTypeCoursesTextContainer}>
          <Text style={styles.degreeTypeCoursesText}>Courses</Text>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>Bachelors</Text>
            <Text style={styles.courseTypeNumber}>20 courses</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>Masters</Text>
            <Text style={styles.courseTypeNumber}>12 courses</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>MPhil</Text>
            <Text style={styles.courseTypeNumber}>8 courses</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>PhD</Text>
            <Text style={styles.courseTypeNumber}>2 courses</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>Diploma</Text>
            <Text style={styles.courseTypeNumber}>20 courses</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>HND</Text>
            <Text style={styles.courseTypeNumber}>12 courses</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>Certificate</Text>
            <Text style={styles.courseTypeNumber}>20 courses</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={[
          styles.degreeTypeSubContainers,
          {
            backgroundColor: "rgba(211, 107, 107, 0.08)",
          },
        ]}
      >
        <View style={styles.degreeTypeCoursesTextContainer}>
          <Text style={styles.degreeTypeCoursesText}>Fees</Text>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>1.9k to 20k</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>1.9k to 20k</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>1.9k to 20k</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>1.9k to 20k</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>1.9k to 20k</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>1.9k to 20k</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>1.9k to 20k</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={[
          styles.degreeTypeSubContainers,
          {
            backgroundColor: "rgba(235, 205, 122, 0.4)",
          },
        ]}
      >
        <View style={styles.degreeTypeCoursesTextContainer}>
          <Text style={styles.degreeTypeCoursesText}>Exams</Text>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>WAEC, SSSCE, HND, ABE ...</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>WAEC, SSSCE, HND, ABE ...</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>WAEC, SSSCE, HND, ABE ...</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>WAEC, SSSCE, HND, ABE ...</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>WAEC, SSSCE, HND, ABE ...</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>WAEC, SSSCE, HND, ABE ...</Text>
          </Pressable>
        </View>
        <View style={styles.courseTypenName}>
          <Pressable style={styles.courseTypeNameContainer}>
            <Text style={styles.courseTypeName}>WAEC, SSSCE, HND, ABE ...</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CoursesTable;
