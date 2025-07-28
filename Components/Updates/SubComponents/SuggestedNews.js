import { View, Text } from "react-native";
import React from "react";
import ListUpdates from "./ListUpdates";
import BoxUpdates from "./BoxUpdates";

const SuggestedNews = () => {
  return (
    <View>
      <View>
        <Text>Also Read</Text>
        <ListUpdates />
      </View>
      <View>
        <Text>More Likewise</Text>
        <BoxUpdates />
      </View>
    </View>
  );
};

export default SuggestedNews;
