import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "../HomePage/HomeStyle";

import colleges from "./College.json";

const Location = require("../../assets/location.png");
const Star = require("../../assets/star.png");

const CollegeBody = () => {
  const Education = colleges.filter((value) => {
    return value.type == "Education";
  });

  const Nursing = colleges.filter((value) => {
    return value.type == "Nursing";
  });

  const Agric = colleges.filter((value) => {
    return value.type == "Agric";
  });

  const Poly = colleges.filter((value) => {
    return value.type == "poly";
  });

  const [mainCol, setmainCol] = useState(colleges);

  const navigation = useNavigation();

  const width = useWindowDimensions().width;
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.collegeOptionsMainContainer}>
          <Pressable
            onPress={() => {
              setmainCol(colleges);
            }}
            style={styles.collegeOptionsContainer}
          >
            <Text style={styles.collegeOptions}>All Colleges</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setmainCol(Nursing);
            }}
            style={styles.collegeOptionsContainer}
          >
            <Text style={styles.collegeOptions}>Nursing Colleges</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setmainCol(Education);
            }}
            style={styles.collegeOptionsContainer}
          >
            <Text style={styles.collegeOptions}>Teaching Colleges</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setmainCol(Agric);
            }}
            style={styles.collegeOptionsContainer}
          >
            <Text style={styles.collegeOptions}>Agric Colleges</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setmainCol(Poly);
            }}
            style={styles.collegeOptionsContainer}
          >
            <Text style={styles.collegeOptions}>Polytechnic</Text>
          </Pressable>
        </View>
      </ScrollView>

      <FlatList
        data={mainCol}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.UniHomeMainContainer}>
                <View style={styles.UniHomeContainer}>
                  <View
                    style={[
                      styles.UniHomeImageContainer,
                      {
                        height: width > 500 ? 250 : 150,
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={styles.UniHomeImage}
                    />
                  </View>

                  <View style={styles.UniHomeTextContainer}>
                    <Text style={styles.UniHomeText}>{`${item.name}`}</Text>
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
                        <Text
                          style={styles.uniMainHomeLocText}
                        >{`${item.town}, ${item.location}`}</Text>
                      </View>

                      <View
                        style={{
                          width: 2,
                          backgroundColor: "#000",
                          height: 20,
                          marginLeft: 10,
                        }}
                      ></View>
                    </View>
                    <View>
                      <Text
                        style={styles.uniMainHomeLocText}
                      >{`Courses ${item.length}`}</Text>
                    </View>
                  </View>

                  <View style={styles.uniMainHomeReviewContainer}>
                    <View style={styles.uniMainHomeReviewImageContainer}></View>
                    <View style={styles.uniMainHomeReviewTextContainer}>
                      <Text
                        style={styles.uniMainHomeReviewText}
                      >{`${item.review}`}</Text>
                    </View>
                    <Image source={Star} style={styles.Revstar} />

                    <View
                      style={{
                        width: 2,
                        backgroundColor: "#000",
                        height: 30,
                        marginLeft: 10,
                      }}
                    ></View>

                    <View style={styles.reviewButton}>
                      <Text
                        style={styles.uniMainHomeReviewText}
                      >{`${item.institution} Inst.`}</Text>
                    </View>
                  </View>

                  <Pressable
                    style={styles.ReadButton}
                    onPress={() => {
                      navigation.navigate("UniData", { colleges: item });
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

export default CollegeBody;
