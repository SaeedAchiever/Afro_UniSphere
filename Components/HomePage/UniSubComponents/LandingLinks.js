import { View, Text, Image } from "react-native";
import styles from "./style";

const Logo = require("../../../assets/logo.png");

const LandingLinks = () => {
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
