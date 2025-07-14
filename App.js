import React from "react";
import { Platform, ScrollView,StyleSheet } from "react-native";

import AppStuff from "./AppStuff";

export default function App() {
  return Platform.select({
    web: () => {
      return (
          <ScrollView>
            <AppStuff />
          </ScrollView>
      );
    },
    default: () => <AppStuff />,
  })();
}
