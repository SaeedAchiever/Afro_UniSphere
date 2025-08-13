import React, { useRef, useEffect, useState } from "react";
import { View, Text, useWindowDimensions, Image, ScrollView } from "react-native";

import styles from "./style";
import ListImage from "../../assets/accra.jpg";

const slides = [
  "Hello Duis fugiat dolor deserunt magna eiusmod deserunt cillum officia id.",
  "Hello Duis fugiat dolor deserunt magna eiusmod deserunt cillum officia id.",
  "Hello Duis fugiat dolor deserunt magna eiusmod deserunt cillum officia id.",
];

const ShopHeader = () => {
  const width = useWindowDimensions().width;
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % slides.length;
      scrollRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [currentIndex, width]);

  return (
    <View
      style={[
        styles.ShopHeaderMainContainer,
        { height: width > 700 ? 400 : 300 },
      ]}
    >
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      >
        {slides.map((text, index) => (
          <View key={index} style={[styles.ShopHeaderContainer, { width }]}>
            <View style={styles.ShopHeaderImage}>
              <Image
                source={ListImage}
                style={styles.ListImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.ShopHeaderTextContainer}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ShopHeader;
