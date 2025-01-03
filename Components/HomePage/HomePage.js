import { View, FlatList, Text } from "react-native";
import React, { useState } from "react";

import styles from "./HomeStyle";

import Head from "../HeadFoot/Head";

import universities from "../University/universities.json";
import colleges from "../College/College.json";

import Suggested from "./UniSubComponents/Suggested";
import Top_Place from "./UniSubComponents/Top_Place";
import Ongoing_Admission from "./UniSubComponents/Ongoing_Admission";
import Preference from "./UniSubComponents/Preference";
import Sub_Scholarship from "./UniSubComponents/Sub_Scholarship";
import Desired_Course from "./UniSubComponents/Desired_Course";
import AdmissionApplication from "./UniSubComponents/AdmissionApplication";
import Footer from "../HeadFoot/Footer";
import { useNavigation } from "@react-navigation/native";

const data = [
  { id: 3, component: Suggested },
  { id: 4, component: Top_Place },
  { id: 5, component: AdmissionApplication },
  { id: 6, component: Ongoing_Admission },
  { id: 7, component: Desired_Course },
  { id: 8, component: Preference },
  { id: 10, component: Sub_Scholarship },
];

// Helper function to get a random university or college
const getRandomUniversity = (data, exclude = []) => {
  let filteredData = data.filter((uni) => !exclude.includes(uni.id));
  const randomIndex = Math.floor(Math.random() * filteredData.length);
  return filteredData[randomIndex];
};

// Function to get three different random universities or colleges
const getThreeRandomUniversities = (data) => {
  const firstUni = getRandomUniversity(data);
  const secondUni = getRandomUniversity(data, [firstUni.id]);
  const thirdUni = getRandomUniversity(data, [firstUni.id, secondUni.id]);
  return [firstUni, secondUni, thirdUni];
};

// Function to get random universities or colleges
const getRandomUniversities = (data, count) => {
  let shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const HomePage = () => {
  const [selectedData, setSelectedData] = useState(universities);
  const [UniBorWid, setUniBorWid] = useState(2);
  const [ColBorWid, setColBorWid] = useState(0);

  const navigation = useNavigation();

  // Get data for rendering
  const [uni1, uni2, uni3] = getThreeRandomUniversities(selectedData);
  const Preference_Uni = getRandomUniversities(selectedData, 5);
  // const Ongoing_List = selectedData.filter(value => value.town ===  "Tamale");

  const renderItem = ({ item }) => {
    const AllComponents = item.component;
    return (
      <AllComponents
        title={`AllComponents ${item.id}`}
        uni1={uni1}
        uni2={uni2}
        uni3={uni3}
        // Ongoing_List={Ongoing_List}
        Preference_Uni={Preference_Uni}
        selectedData={selectedData}
      />
    );
  };

  return (
    <View style={styles.allHomeContainer}>
      <Head />

      {/* Switch between Universities and Colleges */}
      <View style={styles.SwitchContainer}>
        <View
          style={[styles.SwitchContainerBTN, { borderBottomWidth: UniBorWid }]}
          onTouchEnd={() => {
            setSelectedData(universities);
            setUniBorWid(2);
            setColBorWid(0);
          }}
        >
          <Text style={styles.SwitchContainerText}>Universities</Text>
        </View>
        <View
          style={[styles.SwitchContainerBTN, { borderBottomWidth: ColBorWid }]}
          onTouchEnd={() => {
            setSelectedData(colleges);
            setColBorWid(2);
            setUniBorWid(0);
          }}
        >
          <Text style={styles.SwitchContainerText}>Colleges</Text>
        </View>
      </View>

      {/* Render Components */}
      <View style={styles.HomeContainer}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <Footer />
    </View>
  );
};

export default HomePage;
