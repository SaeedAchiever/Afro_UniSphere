import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "../HomeStyle";
import { useNavigation } from "@react-navigation/native";
import News from "../../../Components/Updates/news.json";

const NewsImage = require("../../../assets/cape_coast.jpeg");
const Feeds = () => {
  const width = useWindowDimensions().width;
  const numColumns = width > 750 ? 3 : width > 610 ? 2 : 1;

  const navigation = useNavigation();
  return (
    <View style={styles.recommendationMainContainer}>
      <View style={styles.recommendationHeadContainer}>
        <View>
          <Text style={styles.HomeScholarshipHeaderText}>What's Trendng Now...?
          </Text>
        </View>
      </View>

      <FlatList
        data={News}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        key={numColumns}
        renderItem={({ item }) => {
          return (
            <View
              style={[
                styles.updatesBodyMainContainer,
                {
                  height: width > 600 ? 270 : 250,
                  maxWidth: width > 700 ? 240 : 300,
                },
              ]}
            >
              <ImageBackground source={NewsImage} style={styles.NewsBGImage}>
                <View style={styles.updatesBodyContainer}>
                  <Text style={styles.updatesBodyHeadText}>
                    {`${item.title}`}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />
      <Pressable onPress={() => navigation.navigate("Updates")}>
        <View style={styles.userPreferenceSubBodyBtn}>
          <Text style={styles.userPreferenceSubBodyBtnText}>Read More</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Feeds;
