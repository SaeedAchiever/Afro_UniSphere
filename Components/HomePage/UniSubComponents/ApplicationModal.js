import { View, useWindowDimensions, StyleSheet, Text,ScrollView } from "react-native";
import React from "react";

import { useVideoPlayer, VideoView } from "expo-video";

import VideoSrc from "../../../assets/elon.mp4";

const ApplicationModal = () => {
  const width = useWindowDimensions().width;

  const player = useVideoPlayer(VideoSrc, (player) => {
    player.loop = true;
    // player.play()
  });

  // const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing })

  return (
    <ScrollView>
      <View style={styles.contentContainer}>
        <View
          style={[
            styles.videoContainer,
            {
              height: width > 570 ? 370 : 300,
            },
          ]}
        >
          <VideoView
            style={styles.video}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
            nativeControls
          />
        </View>
        <View style={styles.otherBodyContainer}>
          <View>
            <Text style={styles.titleText}>
              Getting started with your admission applicantion
            </Text>
          </View>

          <View style={{ gap: 20 }}>
            <Text style={styles.bodyText}>
              Anim sit sint reprehenderit enim sint ut aliqua qui aliquip sint
              pariatur aliqua consequat. Velit aliqua laboris amet aute aute
              nulla eu labore quis adipisicing esse in. Cillum pariatur velit
              tempor aute magna est commodo officia aliqua eiusmod eu aliquip.
              Ea aliqua qui do ad nostrud ea. Veniam ad ipsum proident amet
              adipisicing sint id consectetur ex fugiat sunt. Occaecat in nulla
              reprehenderit sit do culpa et ullamco est ex sunt irure velit
              velit. Veniam tempor sunt nostrud culpa do Lorem sint dolore
              aliquip nisi.
            </Text>
            <Text style={styles.bodyText}>
              Anim sit sint reprehenderit enim sint ut aliqua qui aliquip sint
              pariatur aliqua consequat. Velit aliqua laboris amet aute aute
              nulla eu labore quis adipisicing esse in. Cillum pariatur velit
              tempor aute magna est commodo officia aliqua eiusmod eu aliquip.
              Ea aliqua qui do ad nostrud ea. Veniam ad ipsum proident amet
              adipisicing sint id consectetur ex fugiat sunt. Occaecat in nulla
              reprehenderit sit do culpa et ullamco est ex sunt irure velit
              velit. Veniam tempor sunt nostrud culpa do Lorem sint dolore
              aliquip nisi.
            </Text>
            <Text style={styles.bodyText}>
              Anim sit sint reprehenderit enim sint ut aliqua qui aliquip sint
              pariatur aliqua consequat. Velit aliqua laboris amet aute aute
              nulla eu labore quis adipisicing esse in. Cillum pariatur velit
              tempor aute magna est commodo officia aliqua eiusmod eu aliquip.
              Ea aliqua qui do ad nostrud ea. Veniam ad ipsum proident amet
              adipisicing sint id consectetur ex fugiat sunt. Occaecat in nulla
              reprehenderit sit do culpa et ullamco est ex sunt irure velit
              velit. Veniam tempor sunt nostrud culpa do Lorem sint dolore
              aliquip nisi.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  videoContainer: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  otherBodyContainer: {
    alignSelf: "center",
    padding: 20,
    width: "90%",
    gap: 12,
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "300",
    textDecorationLine: "underline",
  },
  bodyText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default ApplicationModal;
