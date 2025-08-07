import { View, Text, Image } from "react-native";
import React from "react";

import styles from "../Sub_Elements/Styles";

const Bullet = require("../../../assets/bullet.png");

const CourseInfo = () => {
  return (
    <View style={styles.CourseInfoMainContainer}>
      <View style={styles.CourseInfoHeaderContainer}>
        <Text style={styles.CourseInfoHeaderText}>Business Administration</Text>
      </View>
      <View style={styles.CourseInfoBodyContainer}>
        <View style={styles.BulletsContainer}>
          <Image source={Bullet} style={styles.Bullets} />
          <Text style={styles.CourseInfoBodyHeadingsText}>Average Salary</Text>
        </View>
        <View style={styles.CourseInfoBodyTextContainer}>
          <Text style={styles.CourseInfoBodyText}>100k to 120k</Text>
        </View>
      </View>
      <View style={styles.CourseInfoBodyContainer}>
        <View style={styles.BulletsContainer}>
          <Image source={Bullet} style={styles.Bullets} />
          <Text style={styles.CourseInfoBodyHeadingsText}>Average Salary</Text>
        </View>
        <View style={styles.CourseInfoBodyTextContainer}>
          <Text style={styles.CourseInfoBodyText}>100k to 120k</Text>
        </View>
      </View>
      <View style={styles.CourseInfoBodyContainer}>
        <View style={styles.BulletsContainer}>
          <Image source={Bullet} style={styles.Bullets} />
          <Text style={styles.CourseInfoBodyHeadingsText}>Average Salary</Text>
        </View>
        <View style={styles.CourseInfoBodyTextContainer}>
          <Text style={styles.CourseInfoBodyText}>100k to 120k</Text>
        </View>
      </View>
      <View style={styles.CourseInfoBodyContainer}>
        <View style={styles.BulletsContainer}>
          <Image source={Bullet} style={styles.Bullets} />
          <Text style={styles.CourseInfoBodyHeadingsText}>Average Salary</Text>
        </View>
        <View style={styles.CourseInfoBodyTextContainer}>
          <Text style={styles.CourseInfoBodyText}>100k to 120k</Text>
        </View>
      </View>
      <View style={styles.CourseInfoBodyContainer}>
        <View style={styles.BulletsContainer}>
          <Image source={Bullet} style={styles.Bullets} />
          <Text style={styles.CourseInfoBodyHeadingsText}>Average Salary</Text>
        </View>
        <View style={styles.CourseInfoBodyTextContainer}>
          <Text style={styles.CourseInfoBodyText}>100k to 120k</Text>
        </View>
      </View>
    </View>
  );
};

export default CourseInfo;
