import { View, useWindowDimensions, Image, Modal } from "react-native";
import React from "react";
import { useState } from "react";

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
    <View>
      <View style={styles.headerContainer}>
        <View onTouchEnd={() => setIsModalVisible(true)}>
          <Image
            source={Menu}
            style={{
              width: deviceWidth > 500 ? 50 : 40,
              height: deviceWidth > 500 ? 50 : 40,
              marginRight: 20,
            }}
          />
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
