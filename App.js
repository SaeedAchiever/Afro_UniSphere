import React from "react";
import { Platform, ScrollView } from "react-native";

import AppStuff from "./AppStuff";
import UniContextProvider from "./UniContextProvider";

export default function App() {
  return Platform.select({
    web: () => {
      return (
        <UniContextProvider>
          <ScrollView>
            <AppStuff />
          </ScrollView>
        </UniContextProvider>
      );
    },
    default: () => <AppStuff />,
  })();
}
