import {
  View,
  Text,
  useWindowDimensions,
  Platform,
  ImageBackground,
  Pressable,
  Image,
  TextInput,
  Modal,
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

const Landing = () => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      const offset = nextIndex * width;

      scrollRef.current?.scrollTo({ x: offset, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, width]);

  return (
    <View
      style={[
        styles.landingPageContainer,
        {
          height: Platform.OS === "web" && width > 1000 ? height - 50 : 330,
        },
      ]}
    >
      {/* Top UI */}
      <View style={styles.landingSearchContainer}>
        {Platform.select({
          default: () => (
            <View style={styles.landingListContainer}>
              <Pressable style={styles.landingSchlsListContainer}>
                <Text style={styles.landingListText}>73 Universities</Text>
              </Pressable>
              <Pressable style={styles.landingSchlsListContainer}>
                <Text style={styles.landingListText}>153 Colleges</Text>
              </Pressable>
            </View>
          ),
          web: () => <LandingLinks />,
        })()}

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
        {images.map((item, index) => (
          <ImageBackground
            key={index.toString()}
            style={[styles.BgImageContainer, { width }]}
            source={item.source}
            resizeMode="cover"
          >
            <Pressable style={styles.landingContainer}>
              <View style={styles.landingSubContainer}>
                <View style={styles.landingSchlsListContainer}>
                  <Text style={styles.landingUniText}>{item.title}</Text>
                </View>
                <View style={styles.landingSchlsListContainer}>
                  <Text style={styles.landingUniText}>{item.programs}</Text>
                </View>
              </View>
            </Pressable>
          </ImageBackground>
        ))}
      </ScrollView>
      <StatusBar backgroundColor={"blue"} />
    </View>
  );
};

export default Landing;
