import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
const Menu = require("../../../assets/menu.png");
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const WebMenu = ({ setIsModalVisible, isModalVisible }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.webMenuContainer}>
      <View style={styles.webMenuBody}>
        <Pressable
          onPress={() => {
            setIsModalVisible(false);
            navigation.navigate("UniversityHome");
          }}
        >
          <Text>Universities</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setIsModalVisible(false);
            navigation.navigate("ScholarshipHome");
          }}
        >
          <Text>Scholarships</Text>
        </Pressable>
        <Pressable>
          <Text>About us</Text>
        </Pressable>
        <Pressable>
          <Text>Suggest a feature</Text>
        </Pressable>
      </View>
      <View style={styles.webMenuBody}>
        <Pressable
          onPress={() => {
            setIsModalVisible(false);
            navigation.navigate("CollegeHome");
          }}
        >
          <Text>Colleges</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setIsModalVisible(false);
            navigation.navigate("Updates");
          }}
        >
          <Text>Updates</Text>
        </Pressable>
        <Pressable>
          <Text>Contact</Text>
        </Pressable>
        <Pressable>
          <Text>Download the App</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WebMenu;
