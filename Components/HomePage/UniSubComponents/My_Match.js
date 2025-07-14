import { View, Text, Modal, Image, Pressable } from "react-native";
import React, { useState } from "react";

import styles from "../HomeStyle";
import MatchForm from "../../MatchMe/MatchForm";
import Preference from "./Preference";

const Close = require("../../../assets/close.png");

const My_Match = () => {
  const [isMatchVisible, setIsMatchVisible] = useState(false);

  return (
    <View style={styles.recommendationMainContainer}>
      <View style={styles.recommendationHeadContainer}>
        <View>
          <Text style={styles.HomeScholarshipHeaderText}>
            Lets Get It For You
          </Text>
        </View>
      </View>

      <View style={styles.myMatchContainer}>
        <Text style={styles.myMatchText}>
          Take a two minutes survey to see which University is best for you
          based on grades and preferred course
        </Text>
        <Pressable
          style={styles.myMatchBtn}
          onPress={() => {
            setIsMatchVisible(true);
          }}
        >
          <Text style={styles.myMatchBtnText}>Start</Text>
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

        <MatchForm />
      </Modal>
    </View>
  );
};

export default My_Match;
