import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "../../Components/HomePage/HomeStyle";

const Home = require("../../assets/home.png");
const University = require("../../assets/university.png");
const College = require("../../assets/college.png");
const Shorts = require("../../assets/vid_icon.png");
const Shop = require("../../assets/cart.png");

const Footer = () => {
  // DEFINING  WIDTH AND HEIGHT
  const deviceWidth = useWindowDimensions().width;

  const navigation = useNavigation();

  return (
    <View style={styles.footerMainContainer}>
      <View style={styles.footerContainer}>
        <Pressable
          style={styles.footerBox}
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        >
          <Image
            source={Home}
            style={styles.footerImage}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: deviceWidth > 500 ? 12 : 10,
            }}
          >
            Home
          </Text>
        </Pressable>

        <Pressable
          style={styles.footerBox}
          onPress={() => navigation.navigate("UniversityHome")}
        >
          <Image
            source={University}
            resizeMode="contain"
            style={styles.footerImage}
          />
          <Text
            style={{
              fontSize: deviceWidth > 500 ? 12 : 10,
            }}
          >
            Universities
          </Text>
        </Pressable>

        <Pressable
          style={styles.footerBox}
          onPress={() => {
            navigation.navigate("CollegeHome");
          }}
        >
          <Image source={College} resizeMode="contain" style={styles.footerImage} />
          <Text
            style={{
              fontSize: deviceWidth > 500 ? 12 : 10,
            }}
          >
            Colleges
          </Text>
        </Pressable>

        <Pressable
          style={styles.footerBox}
          onPress={() => {
            navigation.navigate("Shorts");
          }}
        >
          <Image source={Shorts} resizeMode="contain" style={styles.footerImage} />
          <Text
            style={{
              fontSize: deviceWidth > 500 ? 12 : 10,
            }}
          >
            Shorts
          </Text>
        </Pressable>

        <Pressable
          style={styles.footerBox}
          onPress={() => {
            navigation.navigate("ShopHome");
          }}
        >
          <Image source={Shop} resizeMode="contain" style={styles.footerImage} />
          <Text
            style={{
              fontSize: deviceWidth > 500 ? 12 : 10,
            }}
          >
            Shop
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Footer;
