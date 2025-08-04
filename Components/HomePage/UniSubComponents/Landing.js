import {
  View,
  Text,
  useWindowDimensions,
  Platform,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import styles from "./style";
import LandingLinks from "./LandingLinks";
import SearchedCourses from "./SearchedCourses";

const Close = require("../../../assets/close.png");

const Landing = ({ land1, land2, land3, land4 }) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const [isModalVisible, setIsModalVisible] = useState(false);

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
          height: Platform.OS === "web" && width > 1000 ? height - 300 : 430,
        },
      ]}
    >
      {/* Top UI */}
      <View style={styles.landingSearchContainer}>
        {Platform.select({
          web: () => <LandingLinks />,
        })?.()}

        <View style={{ marginTop: 50, gap: 20 }}>
          {/* Search Text */}
          <View style={styles.landingTextContainer}>
            <Text style={styles.landingText}>
              Search for Universities, Colleges, Courses, updates and more
            </Text>
          </View>

          {/* Input */}
          <Pressable
            style={styles.landingSearch}
            readOnly
            onPress={() => {
              setIsModalVisible(true);
            }}
          >
            <TextInput
              style={styles.landingSearchInput}
              placeholder="Enter your query here..."
              readOnly
            />
          </Pressable>
        </View>

        {Platform.select({
          web: () =>
            width < 880 ? null : (
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
            >
              <Pressable style={styles.landingSchlsListContainer}>
                <Text style={styles.landingUniText}>{item.name}</Text>
              </Pressable>
            </ImageBackground>
          );
        })}
      </ScrollView>

      <View>
        <Modal
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
          animationType="slide"
        >
          <View style={styles.SearchedCoursesModalCont}>
            <View>
              <Pressable
                onPress={() => {
                  setIsModalVisible(false);
                }}
                style={styles.closeContainer}
              >
                <Image
                  source={Close}
                  style={styles.closeImage}
                  resizeMode="cover"
                />
              </Pressable>
            </View>
            <View style={styles.SearchedCoursesModalSubCont}>
              <SearchedCourses />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Landing;
