import { View } from "react-native";
import React, { useState } from "react";

import HomePage from "./HomePage";
// import HomePage from "./HomePage";

import styles from "./HomeStyle";

import { SafeAreaView } from "react-native-safe-area-context";

const HomePageBody = () => {
  // State to keep track of the selected body component

  return (
    <View style={styles.HomeContainer}>
      <SafeAreaView>
        {/* MAIN  CONTENT */}

        <View>
          <View>
            {selectedBody === "HomePage" && <HomePage />}
            {/* {selectedBody === "HomePage" && <HomePage />} */}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomePageBody;
