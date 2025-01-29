import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../HomeStyle";
import { useNavigation } from "@react-navigation/native";

const Feeds = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.HomeMainScholarshipContainer}>
      <View style={styles.HomeScholarshipHeaderContainer}>
        <View>
          <Text style={styles.HomeScholarshipHeaderText}>
            What's Trendng Now...?
          </Text>
        </View>
      </View>

      <View style={styles.updatesContainer}>
        <View style={styles.updatesBodyMainContainer}>
          <View style={styles.updatesBodyContainer}>
            <Text style={styles.updatesBodyHeadText}>
              UEW accpeting Admission D7
            </Text>
            <Text style={styles.updatesBodyText}>
              Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa
              laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui
              dolore eu consequat officia. Deserunt enim tempor elit occaecat
              eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.
            </Text>
          </View>
        </View>

        <View style={styles.updatesBodyMainContainer}>
          <View style={styles.updatesBodyContainer}>
            <Text style={styles.updatesBodyHeadText}>
              UEW accpeting Admission D7
            </Text>
            <Text style={styles.updatesBodyText}>
              Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa
              laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui
              dolore eu consequat officia. Deserunt enim tempor elit occaecat
              eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.
            </Text>
          </View>
        </View>

        <View style={styles.updatesBodyMainContainer}>
          <View style={styles.updatesBodyContainer}>
            <Text style={styles.updatesBodyHeadText}>
              UEW accpeting Admission D7
            </Text>
            <Text style={styles.updatesBodyText}>
              Nnulla non labore sunt. In ut commodo nostrud et ipsum elit. Culpa
              laborum duis et incididunt Lorem. Culpa laboris voluptate duis qui
              dolore eu consequat officia. Deserunt enim tempor elit occaecat
              eiusmod culpa id officia deserunt nostrud tempor id eiusmod ipsum.
            </Text>
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate("Updates")}>
          <View style={styles.userPreferenceSubBodyBtn}>
            <Text style={styles.userPreferenceSubBodyBtnText}>Read More</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Feeds;
