import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StatusBar,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "./Style";
import Footer from "../HeadFoot/Footer";
import newsData from "./news.json";
import ListUpdates from "./SubComponents/ListUpdates";
import BoxUpdates from "./SubComponents/BoxUpdates";
import NewsBody from "./SubComponents/NewsBody";

const News_One = require("../../assets/knust_students.jpg");
const Close = require("../../assets/close.png");

const Updates = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const navigation = useNavigation();

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Auto-scroll effect for the horizontal news slider
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % newsData.length;
      const offset = nextIndex * width;
      scrollRef.current?.scrollToOffset({ x: offset, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, width]);

  // --- Render Horizontal News Header ---
  const renderHeader = () => (
    <View style={[styles.updatesHeadMainContainer, { width }]}>
      <View>
        <FlatList
          ref={scrollRef}
          data={newsData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `news-${index}`}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setIsModalVisible(true);
              }}
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
            </Pressable>
          )}
        />
      {/* Body sections */}
      <View style={styles.updatesMainBodyContainer}>
        <View
          style={[styles.updatesTitleContainer, { backgroundColor: "gold" }]}
        >
          <Text style={{ fontSize: 18, color: "#666", fontWeight: "600" }}>
            Recent News
          </Text>
        </View>
        <ListUpdates />
        <View
          style={[styles.updatesTitleContainer, { backgroundColor: "skyblue" }]}
        >
          <Text style={{ fontSize: 18, color: "#666", fontWeight: "600" }}>
            Top Stories
          </Text>
        </View>
      </View>
        <BoxUpdates />
      </View>
    </View>
  );

  return (
    <View style={[styles.updatesMainContainer, { height: height }]}>
      <FlatList
        data={[]} // Empty list, using header/footer for content
        renderItem={null}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={<Footer />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      />

      <StatusBar style="auto" />

      {/* Modal for News Body */}
      <Modal visible={isModalVisible} animationType="fade">
        <View style={styles.newsMenuMainContainer}>
          <Pressable
            style={styles.newsMenuContainer}
            onPress={() => setIsModalVisible(false)}
          >
            <Image
              source={Close}
              resizeMethod="cover"
              style={styles.newsMenu}
            />
          </Pressable>
          <NewsBody />
        </View>
      </Modal>
    </View>
  );
};

export default Updates;
