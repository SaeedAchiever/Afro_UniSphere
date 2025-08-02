import {
  View,
  Text,
  useWindowDimensions,
  Platform,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import LandingLinks from "./LandingLinks";

const BGImage = require("../../../assets/accra.jpg");
const BGImageTwo = require("../../../assets/ug.jpeg");
const BGImageThree = require("../../../assets/cape_coast.jpeg");

const images = [
  {
    source: BGImage,
    title: "Academic City University College",
    programs: "33 Programs",
  },
  {
    source: BGImageTwo,
    title: "Accra Business School",
    programs: "12 Programs",
  },
  {
    source: BGImageThree,
    title: "African University College of Communication",
    programs: "45 Programs",
  },
];

const Landing = ({ land1, land2, land3, land4 }) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const universities = [land1, land2, land3, land4].filter(Boolean);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % universities.length;
      const offset = nextIndex * width;

      scrollRef.current?.scrollTo({ x: offset, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, width, universities.length]);

  return (
    <View
      style={[
        styles.landingPageContainer,
        {
          height: Platform.OS === "web" && width > 1000 ? height - 300 : 330,
        },
      ]}
    >
      {/* Top UI */}
      <View style={styles.landingSearchContainer}>
        {Platform.select({
          web: () => <LandingLinks />,
        })?.()}

        <View style={{ marginTop: 20, gap: 20 }}>
          {/* Search Text */}
          <View style={styles.landingTextContainer}>
            <Text style={styles.landingText}>
              Search for Universities, Colleges, Courses, updates and more
            </Text>
          </View>

          {/* Input */}
          <View style={styles.landingSearch}>
            <TextInput
              style={styles.landingSearchInput}
              placeholder="Enter your query here..."
            />
          </View>
        </View>

        {Platform.select({
          web: () =>
            width < 660 ? null : (
              <View style={styles.landingTextContainer}>
                <Text style={styles.landingText}>
                  Bsc, Bd, MSc, MPhl, Phd and more...
                </Text>
              </View>
            ),
          default: () => null,
        })()}
      </View>

      {/* Scrollable Image Backgrounds */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        {[land1, land2, land3, land4].map((item, index) => {
          if (!item) return null;

          return (
            <ImageBackground
              key={index.toString()}
              style={[styles.BgImageContainer, { width }]}
              source={{ uri: item.image }}
              // resizeMode=""
            >
              <Pressable style={styles.landingSchlsListContainer}>
                <Text style={styles.landingUniText}>{item.name}</Text>
              </Pressable>
            </ImageBackground>
          );
        })}
      </ScrollView>

      <StatusBar backgroundColor={"blue"} />
    </View>
  );
};

export default Landing;
