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

      <View>
        <Pressable
          onPress={() => {
            setIsWebLinksVisible((prev) => (prev === "none" ? "flex" : "none"));
          }}
          style={[
            styles.webLogoImgCont,
            {
              position: "absolute",
              justifyContent: "flex-end",
              right: 10,
              top: -40,
            },
          ]}
        >
          <Image source={Menu} style={styles.webLogoImg} resizeMode="cover" />
        </Pressable>

        <View style={[styles.webLinksContainer, { display: webLinksVisible }]}>
          <View style={styles.webLinksSubContainer}>
            <Pressable
              onPress={() => {
                navigation.navigate("HomePage");
                setIsWebLinksVisible(false);
              }}
            >
              <Text style={styles.webLinksText}>Home</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("UniversityHome");
                setIsWebLinksVisible(false);
              }}
            >
              <Text style={styles.webLinksText}>Universities</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("CollegeHome");
                setIsWebLinksVisible(false);
              }}
            >
              <Text style={styles.webLinksText}>Colleges</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("ScholarshipHome");
                setIsWebLinksVisible(false);
              }}
            >
              <Text style={styles.webLinksText}>Scholarships</Text>
            </Pressable>
          </View>
          <View style={styles.webLinksSubContainer}>
            <Pressable
              onPress={() => {
                navigation.navigate("MatchForm");
                setIsWebLinksVisible(false);
              }}
            >
              <Text style={styles.webLinksText}>Match Me</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                // navigation.navigate("ScholarshipHome");
                setIsWebLinksVisible(false);
              }}
            >
              <Text style={styles.webLinksText}>About Us</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("Updates");
                setIsWebLinksVisible(false);
              }}
            >
              <Text style={styles.webLinksText}>Updates</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LandingLinks;
