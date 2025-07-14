import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { use } from "react";
import styles from "../HomeStyle";

import { useNavigation } from "@react-navigation/native";

const Location = require("../../../assets/location.png");
const Star = require("../../../assets/star.png");

import universities from "../../University/universities.json";

const CourseModal = ({ course, setIsModalVisible }) => {
  const width = useWindowDimensions().width;

  const navigation = useNavigation();
  const { data } = course;

  // Merge data with universities JSON
  const mergedData = data.map((item) => {
    const universityDetails = universities.find(
      (uni) => uni.name === item.name
    );
    return { ...item, ...universityDetails }; // Combine item with matching university details
  });

  return (
    <View
      style={{
        flex: 1,
        overflow: "scroll",
        marginVertical:10
      }}
    >
      <FlatList
        data={mergedData}
        keyExtractor={(item) => item.id.toString()} // Ensure unique key
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width:'98%',
                maxWidth: 900,
                alignSelf: "center",
              }}
            >
              <View style={styles.UniHomeMainContainer}>
                <View style={styles.UniHomeContainer}>
                  <View
                    style={[
                      styles.UniHomeImageContainer,
                      {
                        height: width > 500 ? 270 : 200,
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={styles.UniHomeImage}
                    />
                  </View>

                  <View style={styles.UniHomeTextContainer}>
                    <Text style={styles.UniHomeText}>{item.name}</Text>
                  </View>

                  <View style={styles.uniMainHomeLocNCampContainer}>
                    <View style={styles.uniMainHomeLocContainer}>
                      <View style={styles.uniMainHomeLocImageContainer}>
                        <Image
                          source={Location}
                          style={styles.uniMainHomeLocImage}
                        />
                      </View>
                      <View>
                        <Text style={styles.uniMainHomeLocText}>
                          {`${item.town}, ${item.location}`}
                        </Text>
                      </View>

                      <View
                        style={{
                          width: 2,
                          backgroundColor: "#000",
                          height: 20,
                          marginLeft: 10,
                        }}
                      />
                    </View>
                    <View>
                      <Text style={styles.uniMainHomeLocText}>
                        {`${item.campus_number} Campuses`}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.uniMainHomeReviewContainer}>
                    <View style={styles.uniMainHomeReviewImageContainer}>
                      <Image source={Star} style={styles.Revstar} />
                    </View>
                    <View style={styles.uniMainHomeReviewTextContainer}>
                      <Text style={styles.uniMainHomeReviewText}>
                        {`${item.reviews} Reviews`}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: 2,
                        backgroundColor: "#000",
                        height: 30,
                        marginLeft: 10,
                      }}
                    />
                    <View style={styles.reviewButton}>
                      <Text style={styles.uniMainHomeReviewText}>
                        {`${item.type} Inst`}
                      </Text>
                    </View>
                  </View>

                  <Pressable
                    style={styles.ReadButton}
                    onPress={() => {
                      setIsModalVisible(false);
                      navigation.navigate("UniData", { university: item });
                    }}
                  >
                    <Text style={styles.ReadButtonText}>Read More</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CourseModal;
