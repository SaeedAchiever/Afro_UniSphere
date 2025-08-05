import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Linking,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../Styles";
import gallery from "../../University/json/gallery.json"; // Import your gallery JSON file

const Close = require("../../../assets/close.png");
const Pic_Icon = require("../../../assets/pic_icon.png");
const Vid_Icon = require("../../../assets/vid_icon.png");

const Virt_Tour = ({ university }) => {
  const [isGalleryVisible, setIsGalleryVisible] = useState("none");
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // Match the university name with the gallery name and set the images
    const matchedGallery = gallery.find((g) => g.name === university.name);
    if (matchedGallery) {
      setGalleryImages(matchedGallery.g_images || []);
    }
  }, [university.name]);

  const handleImageLoadStart = () => {
    setLoading(true);
  };

  const handleImageLoadEnd = () => {
    setLoading(false);
  };

  const handleVideoPress = () => {
    // Open the YouTube URL
    Linking.openURL(university.g_video).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  const width = useWindowDimensions().width;

  return (
    <View style={styles.schoolNoteMainContainer}>
      <View style={styles.schoolNoteHeadContainer}>
        <Text style={styles.campusesTitle}>Virtual Tour</Text>
        <Text style={styles.schoolNoteBodyText}>
          Aliqua Lorem aliqua esse do. Commodo non est tempor enim anim proident
          veniam fugiat enim.
        </Text>
      </View>

      {/* Body */}
      <View style={styles.vTourBodyMainContainer}>
        <ImageBackground
          source={{ uri: university.image }}
          style={[
            styles.vTourBodyContainer,
            {
              height: width > 600 ? 450 : 350,
            },
          ]}
        >
          <View style={styles.vTourBodyTextContainer}>
            <Pressable
              style={[styles.virtualButton, { borderRightWidth: 5 }]}
              onPress={() => setIsGalleryVisible("flex")}
            >
              <Text style={styles.vTourBodyText}>
                {`${galleryImages.length} Images`}
              </Text>
              <Image source={Pic_Icon} style={styles.revStar} />
            </Pressable>

            <Pressable
              style={styles.virtualButton}
              onPress={handleVideoPress} // Handle video press
            >
              <Text style={styles.vTourBodyText}>{`1 Video`}</Text>
              <Image source={Vid_Icon} style={styles.revStar} />
            </Pressable>
          </View>
        </ImageBackground>
      </View>

      <View style={[styles.galleryDisplay, { display: isGalleryVisible }]}>
        {loading && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.preloader}
          />
        )}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={galleryImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item }}
                style={styles.mainImage}
                onLoadStart={handleImageLoadStart} // Show preloader
                onLoadEnd={handleImageLoadEnd} // Hide preloader
              />
            </View>
          )}
        />

        {/* Close Button */}
        <Pressable
          style={styles.closeBtn}
          onPress={() => setIsGalleryVisible("none")}
        >
          <Image source={Close} style={styles.closeImage} />
        </Pressable>
      </View>
    </View>
  );
};

export default Virt_Tour;
