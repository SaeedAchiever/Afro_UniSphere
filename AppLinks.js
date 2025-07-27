import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./AppStyle";
import Links from "./links.json";

const AppLinks = () => {
  return (
    <View style={styles.appLinksContainer}>
      <FlatList
        data={Links}
        key={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appLinkSubContainer}>
            <Pressable>
              <Text style={styles.menuLinksText}>{item.visible_name}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default AppLinks;
