import React from "react";
import {
  Platform,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
} from "react-native";

import react, { useState } from "react";
import styles from "./AppStyle";

import AppStuff from "./AppStuff";

const Menu = require("./assets/menu.png");
const Close = require("./assets/close.png");

export default function App() {
  const [isMenuVisible, setIsMenuVisible] = useState("none");

  return Platform.select({
    web: () => {
      return (
        <ScrollView>
          <View style={styles.webAppContainer}>
            {/* Menu For Web */}
            <Pressable
              onPress={() => {
                isMenuVisible === "none"
                  ? setIsMenuVisible("flex")
                  : setIsMenuVisible("none");
              }}
            >
              <View style={styles.menuContainer}>
                <Image
                  source={isMenuVisible == "none" ? Menu : Close}
                  style={styles.menu}
                />
              </View>
            </Pressable>
            <View>
              <View style={[styles.menuLinksContainer, { display: isMenuVisible }]}>

              </View>
            </View>
          </View>
          <AppStuff />
        </ScrollView>
      );
    },
    default: () => <AppStuff />,
  })();
}

// const styles = StyleSheet.create({});
