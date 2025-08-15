import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  Pressable,
  Modal,
  TextInput,
} from "react-native";

import React, { useState, useRef, useCallback } from "react";
import { Video } from "expo-av";

import videos from "./allvideos.json"; // Your JSON data file
import styles from "./Style";
import Interactions from "./Interactions";
import User from "./User";
import Comments from "./Comments";
import Footer from "../HeadFoot/Footer";
import Search from "./Search";

import DemoVid from "../../assets/vids/bgVid.mp4";

const Hide = require("../../assets/minus.png");
const Close = require("../../assets/close.png");
const PlayIcon = require("../../assets/play.png"); // Add your play icon image
const PauseIcon = require("../../assets/pause.png"); // Add your pause icon image

const Shorts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Track play/pause state

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const videoRefs = useRef([]); // Store references to video components

  const handleViewableItemsChanged = useCallback(
    ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        const newIndex = viewableItems[0].index;

        // Reset and stop the currently playing video
        const currentVideo = videoRefs.current[currentIndex]?.current;
        if (currentVideo) {
          currentVideo.pauseAsync().catch(() => {});
          currentVideo.seekAsync(0).catch(() => {}); // Reset video to the beginning
        }

        // Play the newly visible video
        const newVideo = videoRefs.current[newIndex]?.current;
        if (newVideo) {
          newVideo.playAsync().catch(() => {});
          setIsPlaying(true); // Set playing state
        }

        setCurrentIndex(newIndex);
      }
    },
    [currentIndex]
  );

  const togglePlayPause = () => {
    const currentVideo = videoRefs.current[currentIndex]?.current;
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pauseAsync().catch(() => {});
      } else {
        currentVideo.playAsync().catch(() => {});
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.shortsVideoContainer, { height }]}>
      <Video
        ref={(ref) => (videoRefs.current[index] = ref)} // Store the React ref
        // source={{ uri: item.source }}
        source={DemoVid}
        style={[styles.shortsVideo, { height: "100%", flex: 1 }]}
        resizeMode="cover"
        shouldPlay={index === currentIndex}
        isLooping
        useNativeControls={false}
      />

      {/* Comments Section */}

      {isCommentsVisible && (
        <View style={styles.showCommentsContainer}>
          <Pressable
            style={styles.closeComments}
            onPress={() => setIsCommentsVisible(false)}
          >
            <Image
              source={Hide}
              resizeMode="contain"
              style={styles.closeCommentsContainer}
            />
          </Pressable>
          <Comments item={item} />
        </View>
      )}

      {/* Interactions Section */}
      <View style={styles.InteractionsMainContainer}>
        <Interactions
          item={item}
          showComments={() => setIsCommentsVisible(true)}
        />
      </View>

      {/* User Section */}
      <View style={styles.UserMainContainer}>
        <User item={item} />
      </View>
    </View>
  );

  return (
    <View style={[styles.shortsMainContainer]}>
      {/* Menu Button */}
      <Pressable
        onPress={() => {
          setIsSearchVisible(true);
        }}
        style={styles.shortsMenuContainer}
      >
        <TextInput
          numberOfLines={1}
          placeholder="Discover More"
          placeholderTextColor="#cfcfcf"
          style={styles.searchVideos}
          readOnly
        />
      </Pressable>

      {/* Video List */}
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        pagingEnabled
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 80, // Detect video as visible when 80% of it is on-screen
        }}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer */}
      {/* {!isCommentsVisible && <Footer />} */}
      <View>
        <Modal visible={isSearchVisible} animationType="slide">
          <Pressable
            style={styles.searchModalClose}
            onPress={() => {
              setIsSearchVisible(false);
            }}
          >
            <Image source={Close} style={styles.closeCommentsContainer} />
          </Pressable>
          <Search />
        </Modal>
      </View>
    </View>
  );
};

export default Shorts;
