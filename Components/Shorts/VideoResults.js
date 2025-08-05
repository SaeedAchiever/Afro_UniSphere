import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import styles from "./Style";
import { Video } from "expo-av";

import videos from "./videos.json";

const UserPic = require("../../assets/user_3.jpg");

const VideoResults = () => {
  // Screen width
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();

  // Determine the number of columns based on the screen width
  const numColumns = width > 600 ? 3 : 2;

  return (
    <View style={styles.SearchMainContainer}>
      <View>
        <FlatList
          data={videos}
          numColumns={numColumns} // Set the number of columns dynamically
          key={numColumns} // Re-render FlatList when the number of columns changes
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  styles.searchResultsContainer,
                  {
                    width: width > 600 ? "32%" : "49%",
                    height: width > 600 ? 300 : 250,
                  },
                ]}
              >
                <View style={styles.searchedVideoContainer}>
                  <Video
                    source={{ uri: item.source }}
                    style={styles.searchedVideo}
                    useNativeControls={false}
                    resizeMode="cover"
                    isLooping={true}
                    shouldPlay={false}
                  />
                </View>

                <View style={styles.searchedVideoInfoContainer}>
                  <View style={styles.userInfooterContainer}>
                    <View style={styles.userInfooterImageContainer}>
                      <Image
                        source={UserPic}
                        style={styles.userInfooterImage}
                        resizeMode="cover"
                      />
                    </View>
                    <View>
                      <Text
                        style={[styles.accountName, { fontWeight: "600" }]}
                      >{`${item.profile_name}`}</Text>
                      <Text
                        style={[styles.accountName, { fontWeight: "400" }]}
                      >{`@${item.user_name}`}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default VideoResults;
