import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../HomeStyle";

const Location = require("../../../assets/location.png");
const SmallImage = require("../../../assets/recomended.png");

const Suggested = ({ uni1, uni2, uni3 }) => {
  const deviceWidth = useWindowDimensions().width;
  const navigation = useNavigation();

  const universities = [uni1, uni2, uni3];

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % universities.length;
      const offset = nextIndex * deviceWidth;
      scrollRef.current?.scrollTo({ x: offset, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, deviceWidth]);

  return (
    <View style={styles.recommendationMainContainer}>
      {/* Header */}
      <View style={styles.recommendationHeadContainer}>
        <Image
          source={SmallImage}
          style={{
            width: deviceWidth > 500 ? 40 : 25,
            height: deviceWidth > 500 ? 40 : 25,
            marginHorizontal: 7,
          }}
        />
        <Text
          style={[
            styles.recommendationHeadText,
            { fontSize: deviceWidth > 500 ? 22 : 17 },
          ]}
        >
          Suggested for you
        </Text>
      </View>

      {/* ScrollView instead of Swiper */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        style={{ maxHeight: 300 }}
      >
        {universities.map((uni, index) => (
          <Pressable
            key={index.toString()}
            style={[
              styles.recommendationContainer,
              { width: deviceWidth, height: deviceWidth > 600 ? 270 : 230 },
            ]}
            onPress={() => {
              navigation.navigate("UniData", { university: uni });
            }}
          >
            <View style={styles.recommendationTextContainer}>
              <View>
                <Text style={styles.recommendationTextName}>{uni.name}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 20,
                    paddingTop: 5,
                  }}
                >
                  <Image
                    source={Location}
                    style={styles.recommendationLocation}
                  />
                  <Text style={styles.recommendationTextHead}>{uni.town}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.recommendationTextFee}>Fee GHC 1k-40k</Text>
                <Text style={styles.recommendationTextRate}>
                  {uni.rate} Rating
                </Text>
              </View>
            </View>
            <View style={styles.recommendationImageContainer}>
              <Image
                source={{ uri: uni.image }}
                style={styles.recommendationImage}
              />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Suggested;
