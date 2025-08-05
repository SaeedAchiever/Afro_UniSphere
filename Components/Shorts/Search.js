import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import { Video } from "expo-av";

import videos from "./videos.json";
import VideoResults from "./VideoResults";
import UsersResults from "./UsersResults";

const UserPic = require("../../assets/user_3.jpg");
const SearchBtn = require("../../assets/send.png");

const Search = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  // Filter state
  const [activeFilter, setActiveFilter] = useState("all");

  const numColumns = width > 600 ? 3 : 2;

  return (
    <View style={[styles.SearchMainContainer, { minHeight: height }]}>
      <View style={styles.menuOutputHeaderContainer}>
        <Pressable
          style={[
            styles.userPicContainer,
            {
              width: width > 700 ? 75 : 50,
              height: width > 700 ? 75 : 50,
            },
          ]}
          onPress={() => {
            navigation.navigate("User_Profile");
          }}
        >
          <Image source={UserPic} style={styles.userPic} resizeMode="cover" />
        </Pressable>

        <View style={styles.menuOutputSearchContainer}>
          <TextInput
            placeholder="Search For Shorts"
            placeholderTextColor={"#cfcfcf"}
            style={styles.shortSearch}
          />
          <View style={styles.menuOutputSearchBtn}>
            <Image
              source={SearchBtn}
              style={styles.SearchBtn}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View style={{ marginBottom: 200 }}>
        {/* Filter Buttons */}
        <View style={styles.shortsFilterContainer}>
          {["all", "shorts", "users"].map((filter) => (
            <Pressable key={filter} onPress={() => setActiveFilter(filter)}>
              <Text
                style={[
                  styles.searchedResultsFilterText,
                  activeFilter === filter && {
                    fontWeight: "bold",
                    color: "#000",
                    borderWidth: 2,
                    paddingHorizontal: 30,
                    borderRadius: 10,
                    borderColor: "skyblue",
                  },
                ]}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Conditional rendering */}
        <ScrollView>
          <View style={{ gap: 30 }}>
            {(activeFilter === "all" || activeFilter === "shorts") && (
              <VideoResults />
            )}
            {(activeFilter === "all" || activeFilter === "users") && (
              <UsersResults />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
