import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./Style";
import { Video } from "expo-av";

import videos from "./videos.json";

const UserPic = require("../../assets/user_3.jpg");

const UsersResults = () => {
  // Screen width
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();

  // Determine the number of columns based on the screen width
  // const numColumns = width > 600 ? 3 : 2;

  return (
    <View style={[styles.SearchMainContainer, { minHeight: height }]}>
      <View
        style={{
          marginBottom: 200,
        }}
      >
        <FlatList
          data={videos}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  styles.searchResultsContainer,
                  {
                    width: "97%",
                    height: 70,
                    alignSelf: "center",
                    backgroundColor: "#cfcfcf",
                    marginVertical: 15,
                  },
                ]}
              >
                  <View
                    style={[
                      styles.userInfooterContainer,
                      { gap: 30, height: "100%", backgroundColor: "#cfcfcf" },
                    ]}
                  >
                    <View
                      style={[
                        styles.userInfooterImageContainer,
                        {
                          height: "100%",
                          width: 70,
                          backgroundColor: "#cfcfcf",
                        },
                      ]}
                    >
                      <Image
                        source={UserPic}
                        style={styles.userInfooterImage}
                        resizeMode="cover"
                      />
                    </View>
                    <View>
                      <Text
                        style={[
                          styles.accountName,
                          { color: "#333", fontWeight: "600" },
                        ]}
                      >{`${item.profile_name}`}</Text>
                      <Text
                        style={[
                          styles.accountName,
                          { color: "#333", fontWeight: "400" },
                        ]}
                      >{`@${item.user_name}`}</Text>
                    </View>
                  </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default UsersResults;
