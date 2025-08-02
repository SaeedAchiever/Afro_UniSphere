import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./AppStyle";
import Links from "./links.json";

const AppLinks = ({ navigate, isMenuVisible, setIsMenuVisible }) => {
  return (
    <View style={styles.appLinksContainer}>
      <FlatList
        data={Links}
        key={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.appLinkSubContainer}>
            <Pressable
              onPress={() => {
                setIsMenuVisible("none");
                navigate(item.name);
              }}
            >
              <Text style={styles.menuLinksText}>{item.visible_name}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default AppLinks;
