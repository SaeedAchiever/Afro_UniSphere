import {
  View,
  Image,
  TextInput,
  Keyboard,
  FlatList,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

import styles from "../../Components/HomePage/HomeStyle";
import Footer from "../HeadFoot/Footer";

import Head from "../HeadFoot/Head";

import ShopList from "./ShopList";
import ShopHeader from "./ShopHeader";
import AdmissionApplication from "../HomePage/UniSubComponents/AdmissionApplication";
import ResultsChecker from "./ResultsChecker";
import HowToCheckResults from "./HowToCheckResults/HowToCheckResults";

const Back = require("../../assets/back.jpg");
const Cart = require("../../assets/shoping.png");

const ShopHome = () => {
  const [searchedData, setSearchedData] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState("none");

  const data = [
    { id: "1", component: ShopHeader },
    { id: "2", component: ShopList },
    { id: "3", component: AdmissionApplication },
    { id: "4", component: ResultsChecker },
    { id: "5", component: HowToCheckResults },
  ];

  const renderItem = ({ item }) => {
    const AllComponents = item.component;
    return <AllComponents />;
  };

  return (
    <View
      style={{
        width: "100%",
        maxWidth: 1200,
        alignSelf: "center",
        flex: 1,
        paddingBottom: 80,
        marginTop:90
      }}
    >
      <Footer />

      <View
        style={[
          styles.uniHeader,
          {
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
          },
        ]}
      >
        <View style={[styles.searchBarContainer, { width: "80%" }]}>
          <Pressable
            onPress={() => {
              setIsSearchVisible("none");
              Keyboard.dismiss();
              setSearchedData("");
            }}
            style={{ display: isSearchVisible }}
          >
            <Image source={Back} style={styles.searchBack} />
          </Pressable>

          <TextInput
            placeholder="Search Here..."
            value={searchedData}
            numberOfLines={1}
            onChangeText={(text) => setSearchedData(text)}
            onFocus={() => {
              setIsSearchVisible("flex");
            }}
            style={styles.searchBar}
          />
        </View>

        <View style={[{ width: "15%", height: "100%" }]}>
          <Image source={Cart} style={styles.searchBack} />
        </View>
      </View>

      <View
        style={{
          width: "100%",
        }}
      >
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <StatusBar />
    </View>
  );
};

export default ShopHome;
