import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "./Style";
import Footer from "../HeadFoot/Footer";
import newsData from "./news.json";
import ListUpdates from "./SubComponents/ListUpdates";
import BoxUpdates from "./SubComponents/BoxUpdates";

const News_One = require("../../assets/knust_students.jpg");
const News_Two = require("../../assets/students_two.jpg");
const News_Three = require("../../assets/staff.jpg");

const Updates = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const navigation = useNavigation();

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % newsData.length;
      const offset = nextIndex * width;
      scrollRef.current?.scrollTo({ x: offset, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // Auto-scroll every 3s

    return () => clearInterval(interval);
  }, [currentIndex, width]);

  return (
    <View style={[styles.updatesMainContainer, { height: height }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.updatesHeadMainContainer, { width: width }]}>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
          >
            {newsData.map((item, index) => (
              <View
                key={index.toString()}
                style={[
                  styles.updatesHeaderContainer,
                  { width: width, height: width > 600 ? 400 : 300 },
                ]}
              >
                <View style={styles.updatesHeaderImageContainer}>
                  <Image
                    source={News_One}
                    resizeMode="cover"
                    style={styles.updatesHeaderImage}
                    resizeMethod="fill"
                  />
                </View>

                <View style={styles.updatesHeaderTextContainer}>
                  <Text style={styles.updatesHeaderText}>{item.title}</Text>
                  <Text style={styles.updatesHeaderDate}>20 Jul 2025</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Body */}
        <View style={styles.updatesMainBodyContainer}>
          <ListUpdates />
          <BoxUpdates />
          <ListUpdates />
          <BoxUpdates />
        </View>
      </ScrollView>

      <View>
        <Footer />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Updates;
