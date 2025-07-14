import { View, Text, Modal, Image, Pressable } from "react-native";
import React, { useState } from "react";

import styles from "../../HomePage/HomeStyle";
const Close = require("../../../assets/close.png");

const HowToCheckResults = () => {
  const [isMatchVisible, setIsMatchVisible] = useState(false);
  return (
    <View style={styles.recommendationMainContainer}>
      <View style={styles.recommendationHeadContainer}>
        <View>
          <Text style={styles.HomeScholarshipHeaderText}>
            How to check your results ? ? ?{" "}
          </Text>
        </View>
      </View>

      <View style={styles.myMatchContainer}>
        <Text style={styles.myMatchText}>
          Its much convinient to check your results personally without having
          anyone to spy you :)
        </Text>
        <Pressable
          style={styles.myMatchBtn}
          onPress={() => {
            setIsMatchVisible(true);
          }}
        >
          <Text style={styles.myMatchBtnText}>Start Now</Text>
        </Pressable>
      </View>

      <Modal visible={isMatchVisible} animationType="fade">
        <Pressable
          onPress={() => {
            setIsMatchVisible(false);
          }}
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            zIndex: 100,
          }}
        >
          <Image
            source={Close}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </Pressable>
      </Modal>
    </View>
  );
};

export default HowToCheckResults;
