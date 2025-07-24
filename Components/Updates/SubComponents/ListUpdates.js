import { View, Text, Image, FlatList } from "react-native";
import React from "react";

import styles from "../Style";
import NewsList from "../news.json";

const List = require("../../../assets/list.png");
const ListUpdates = () => {
  return (
    <View style={styles.updatesListContainer}>
      <FlatList
        data={NewsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.updatesListSubContainer}>
            <View style={styles.updatesListImageContainer}>
              <Image source={List} style={styles.updatesListImage} />
            </View>

            <View style={styles.updatesListTextContainer}>
              <Text style={styles.updatesListText}>{item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListUpdates;
