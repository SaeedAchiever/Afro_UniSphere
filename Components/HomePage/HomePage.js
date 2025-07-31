import {
  View,
  FlatList,
  Text,
  Pressable,
  StatusBar,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./HomeStyle";

import Head from "../HeadFoot/Head";

import universities from "../University/universities.json";
import colleges from "../College/College.json";

import Suggested from "./UniSubComponents/Suggested";
import Top_Place from "./UniSubComponents/Top_Place";
import Ongoing_Admission from "./UniSubComponents/Ongoing_Admission";
import Preference from "./UniSubComponents/Preference";
import Feeds from "./UniSubComponents/Feeds";
import Sub_Scholarship from "./UniSubComponents/Sub_Scholarship";
import Desired_Course from "./UniSubComponents/Desired_Course";
import AdmissionApplication from "./UniSubComponents/AdmissionApplication";
import Footer from "../HeadFoot/Footer";
import Landing from "./UniSubComponents/Landing";

const data = [
  { id: 0, component: Landing },
  { id: 1, component: Suggested },
  { id: 2, component: Top_Place },
  { id: 3, component: AdmissionApplication },
  { id: 4, component: Ongoing_Admission },
  { id: 5, component: Desired_Course },
  { id: 6, component: Feeds },
  { id: 7, component: Preference },
  { id: 8, component: Sub_Scholarship },
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
  const firstLand = getRandomUniversity(data, [
    firstUni.id,
    secondUni.id,
    thirdUni.id,
  ]);
  const secondLand = getRandomUniversity(data, [
    firstUni.id,
    secondUni.id,
    thirdUni.id,
    firstLand.id,
  ]);
  const thirdLand = getRandomUniversity(data, [
    firstUni.id,
    secondUni.id,
    thirdUni.id,
    firstLand.id,
    secondLand.id,
  ]);
  const fourthLand = getRandomUniversity(data, [
    firstUni.id,
    secondUni.id,
    thirdUni.id,
    firstLand.id,
    secondLand.id,
    thirdLand.id,
  ]);
  return [
    firstUni,
    secondUni,
    thirdUni,
    firstLand,
    secondLand,
    thirdLand,
    fourthLand,
  ];
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

  // Get data for rendering
  const [uni1, uni2, uni3, land1, land2, land3,land4] = getThreeRandomUniversities(selectedData);
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
        land1={land1}
        land2={land2}
        land3={land3}
        land4={land4}
        // Ongoing_List={Ongoing_List}
        Preference_Uni={Preference_Uni}
        selectedData={selectedData}
      />
    );
  };

  return (
    <View style={styles.allHomeContainer}>
      {/* Switch between Universities and Colleges */}
      <View
        style={[
          styles.SwitchContainer,
          { display: Platform.OS === "web" ? "none" : "flex" },
        ]}
      >
        <View
          style={{
            position: "absolute",
            right: 10,
            zIndex: 100,
          }}
        >
          <Head />
        </View>
        <Pressable
          style={[styles.SwitchContainerBTN, { borderBottomWidth: UniBorWid }]}
          onPress={() => {
            setSelectedData(universities);
            setUniBorWid(2);
            setColBorWid(0);
          }}
        >
          <Text style={styles.SwitchContainerText}>Universities</Text>
        </Pressable>
        <Pressable
          style={[styles.SwitchContainerBTN, { borderBottomWidth: ColBorWid }]}
          onPress={() => {
            setSelectedData(colleges);
            setColBorWid(2);
            setUniBorWid(0);
          }}
        >
          <Text style={styles.SwitchContainerText}>Colleges</Text>
        </Pressable>
      </View>

      {/* Render Components */}
      <View style={styles.HomeContainer}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <Footer />
      <StatusBar />
    </View>
  );
};

export default HomePage;
