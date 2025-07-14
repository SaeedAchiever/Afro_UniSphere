import {
  View,
  Text,
  Image,
  useWindowDimensions,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "../HomeStyle";

const Star = require("../../../assets/star.png");

const Preference = ({ Preference_Uni }) => {
  // DEFINING  WIDTH AND HEIGHT
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const navigation = useNavigation();

  return (
    <View style={styles.recommendationMainContainer}>
      <View style={styles.recommendationHeadContainer}>
        <Text
          style={{
            fontSize: width > 500 ? 18 : 16,
            textTransform: "capitalize",
            fontWeight: 300,
          }}
        >
          You might also love
        </Text>
      </View>

      <View style={styles.userPreferenceBodyContainer}>
        <FlatList
          data={Preference_Uni}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  styles.userPreferenceSubBodyContainer,
                  {
                    height: width > 600 ? 270 : 220,
                  },
                ]}
              >
                <View style={styles.userPreferenceSubBodyTextCont}>
                  <View style={styles.userPreferenceSubBodyTextContTwo}>
                    <Text
                      style={styles.userPreferenceSubBodyText}
                    >{`${item.name}`}</Text>
                    <Text
                      style={styles.userPreferenceSubBodyText}
                    >{`${item.location}`}</Text>
                    <View style={styles.prefRevContainer}>
                      <Image source={Star} style={styles.Revstar} />
                      <Image source={Star} style={styles.Revstar} />
                      <Image source={Star} style={styles.Revstar} />
                      <Image source={Star} style={styles.Revstar} />
                      <Image source={Star} style={styles.Revstar} />
                    </View>
                    <Pressable
                      style={styles.userPreferenceSubBodyBtn}
                      onPress={() => {
                        navigation.navigate("UniData", {
                          university: Preference_Uni.find(
                            (uni) => uni.name === item.name
                          ),
                        });
                      }}
                    >
                      <Text style={styles.userPreferenceSubBodyBtnText}>
                        View Profile
                      </Text>
                    </Pressable>
                  </View>
                </View>
                <View style={styles.userPreferenceSubBodyImageCont}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.userPreferenceImage}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Preference;
