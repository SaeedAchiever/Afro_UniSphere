import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import styles from "../HomePage/HomeStyle";

const Back = require("../../assets/back.jpg");

const CollegeHead = ({ colleges }) => {
  const [isSearchVisible, setIsSearchVisible] = useState("none");
  const [searchedData, setSearchedData] = useState("");

  const searchedList = () => {
    if (searchedData === "") {
      return [];
    }
    return colleges.filter((value) =>
      value.name.toLowerCase().startsWith(searchedData.toLowerCase())
    );
  };

  return (
    <View>
      <View style={styles.uniHeader}>
        <View style={styles.logoContainer}>
          <View>
            <Text style={styles.logoName}>Afro UniSphere</Text>
          </View>
        </View>

        <View style={styles.searchBarContainer}>
          <Pressable
            onPress={() => {
              setIsSearchVisible("none");
              setSearchedData("");
            }}
            style={{ display: isSearchVisible }}
          >
            <Image source={Back} style={styles.searchBack} />
          </Pressable>

          <TextInput
            placeholder="Search Here..."
            value={searchedData}
            numberOfLines={1}
            placeholderTextColor={"#333"}
            onChangeText={(text) => setSearchedData(text)}
            onFocus={() => {
              setIsSearchVisible("flex");
            }}
            style={styles.searchBar}
          />
        </View>

        <View style={[styles.searchContainer, { display: isSearchVisible }]}>
          <FlatList
            data={searchedList()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={styles.searchListContainer}
                  onPress={() => {
                    navigation.navigate("UniData", { university: item });
                  }}
                >
                  <Text style={styles.searchListText}>{item.name}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CollegeHead;
