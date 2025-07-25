import { View, Text, Image, Pressable } from "react-native";
import react, { use, useState } from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const Menu = require("../../../assets/menu.png");
const Logo = require("../../../assets/logo.png");

const LandingLinks = () => {
  const navigation = useNavigation();
  const [menuVisible, setIsMenuIVisible] = useState("flex");
  const [closeVisible, setIsCloseIVisible] = useState("flex");
  const [webLinksVisible, setIsWebLinksVisible] = useState("none");

  return (
    <View style={styles.webLogoContainer}>
      <View style={styles.webandLogo}>
        <View style={styles.webLogoImgCont}>
          <Image source={Logo} style={styles.webLogoImg} resizeMode="cover" />
        </View>
        <Text style={styles.logoText}>Afro UniSphere</Text>
      </View>
    </View>
  );
};

export default LandingLinks;
