import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "../HomeStyle";

const Scholarship = require("../../../assets/recomended.png");

const Scholar = require("../../../assets/scholar.png");
const Scholar_Two = require("../../../assets/scholar_two.png");
const Scholar_Three = require("../../../assets/scholar_three.png");

const Sub_Scholarship = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recommendationMainContainer}>
      <View style={styles.recommendationHeadContainer}>
        <View style={styles.HomeScholarshipHeaderImageContainer}>
          <Image
            source={Scholarship}
            style={styles.HomeScholarshipHeaderImage}
          />
        </View>

        <View>
          <Text style={styles.HomeScholarshipHeaderText}>
            Up to 100% scholarship
          </Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.ScholarshipScrolls}>
          <View style={styles.ScholarshipBox}>
            <Image
              source={Scholar}
              resizeMethod="contain"
              style={styles.ScholarImage}
            />
          </View>

          <View style={styles.ScholarshipBodyTextContainer}>
            <Text style={styles.ScholarshipBodyText}>
              $1000 Havard Scholarship lmited seats
            </Text>
          </View>
        </View>

        <View style={styles.ScholarshipScrolls}>
          <View style={styles.ScholarshipBox}>
            <Image
              source={Scholar_Two}
              resizeMethod="contain"
              style={styles.ScholarImage}
            />
          </View>

          <View>
            <Text style={styles.ScholarshipBodyText}>
              $1000 Havard Scholarship Ending soon
            </Text>
          </View>
        </View>

        <View style={styles.ScholarshipScrolls}>
          <Pressable
            onPress={() => {
              navigation.navigate("ScholarshipBody");
            }}
          >
            <View style={styles.ScholarshipBox}>
              <Image
                source={Scholar_Three}
                resizeMethod="contain"
                style={styles.ScholarImage}
              />
            </View>

            <View>
              <Text style={styles.ScholarshipBodyText}>
                $1000 Havard scholarship Best Offer Available
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Sub_Scholarship;
