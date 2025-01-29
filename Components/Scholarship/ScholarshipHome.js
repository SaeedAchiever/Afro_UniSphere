import { View, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import Scholarships from "./Scholarship.json";

import { SafeAreaView } from "react-native-safe-area-context";
import Head from "../HeadFoot/Head";
import Footer from "../HeadFoot/Footer";
import SchoList from "./SchoList";

const ScholarshipHome = () => {
  const [selectedId, setSelectedId] = useState(null); // Track the ID of the clicked item

  return (
    <SafeAreaView>
      <View style={styles.ScholarshipMainBodyContainer}>
        <Head />
        <FlatList
          data={Scholarships}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isSelected = selectedId === item.id; // Check if the current item is selected
            return (
              <SchoList
                item={item}
                isSelected={isSelected}
                setSelectedId={setSelectedId}
              />
            );
          }}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default ScholarshipHome;
