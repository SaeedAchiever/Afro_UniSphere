import {
  View,
  useWindowDimensions,
  Image,
  Modal,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import { useState, useContext } from "react";

import { useNavigation } from "@react-navigation/native";

import styles from "../../Components/HomePage/HomeStyle";

import HeadLinks from "./HeadLinks";

const Menu = require("../../assets/menu.png");

const Head = () => {
  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  // DEFINING  WIDTH AND HEIGHT
  const deviceWidth = useWindowDimensions().width;

  return (
    <View
      style={{
        display: Platform.OS === "web" ? "none" : "flex",
      }}
    >
      <View style={styles.headerContainer}>
        <View>
          <Pressable onPress={() => setIsModalVisible(true)}>
            <Image
              source={Menu}
              style={{
                width: deviceWidth > 500 ? 50 : 40,
                height: deviceWidth > 500 ? 50 : 40,
                marginRight: 20,
              }}
            />
          </Pressable>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
        animationType="slide"
      >
        <HeadLinks
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </Modal>
    </View>
  );
};

export default Head;
