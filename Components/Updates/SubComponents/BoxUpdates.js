import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import News from "../news.json";
import styles from "../../HomePage/HomeStyle";
const NewsImage = require("../../../assets/staff.jpg");

const BoxUpdates = () => {
  const width = useWindowDimensions().width;
  const numColumns = width > 750 ? 3 : width > 610 ? 2 : 1;

  return (
    <View style={styles.recommendationMainContainer}>
      <View
        style={{
          width: "auto",
          backgroundColor: "skyblue",
          marginHorizontal: 20,
          maxWidth: 150,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#666", fontWeight: "600" }}>
          Top Stories
        </Text>
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
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "600",
                      color: "#fff",
                      fontStyle: "italic",
                      marginTop: 5,
                      textAlign: "left",
                      marginLeft: 20,
                    }}
                  >
                    {`10 june 2023`}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
};

export default BoxUpdates;
