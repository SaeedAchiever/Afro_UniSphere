import { View, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./Style";
import Scholarships from "./Scholarship.json";

import Head from "../HeadFoot/Head";
import Footer from "../HeadFoot/Footer";
import SchoList from "./SchoList";

const ScholarshipHome = () => {
  const [selectedId, setSelectedId] = useState(null); // Track the ID of the clicked item

  return (
      <View style={styles.ScholarshipMainBodyContainer}>
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
  );
};

export default ScholarshipHome;
