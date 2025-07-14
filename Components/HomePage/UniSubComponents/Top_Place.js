import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "../HomeStyle";

const Star = require("../../../assets/star.png");
const Location = require("../../../assets/location.png");
const Accra = require("../../../assets/accra.jpg");
const Kumasi = require("../../../assets/kumasi.jpeg");
const Cape_Coast = require("../../../assets/cape_coast.jpeg");
const Tamale = require("../../../assets/tamale.jpeg");
const TopPlaceLogo = require("../../../assets/top_place.png");

// import selectedData from "../../University/universities.json"

const Top_Place = ({ selectedData }) => {
  const tamale = selectedData.filter((value) => {
    return value.location == "Tamale";
  });

  const accra = selectedData.filter((value) => {
    return value.town == "Accra";
  });

  const kumasi = selectedData.filter((value) => {
    return value.town == "Kumasi";
  });

  const cape_coast = selectedData.filter((value) => {
    return value.location == "Cape Coast";
  });

  const navigation = useNavigation();

  const [modalVisibility, setModalVisibility] = useState(false);
  const [placeData, setPlacedata] = useState(null);

  // DEFINING  WIDTH AND HEIGHT
  const deviceWidth = useWindowDimensions().width;

  return (
    <View style={styles.topPlaceMainContainer}>
      <View style={styles.recommendationHeadContainer}>
        <Image
          source={TopPlaceLogo}
          style={{
            width: 20,
            height: 20,
          }}
        />
        <Text
          style={{
            fontSize: deviceWidth > 500 ? 18 : 16,
            fontWeight: 300,
          }}
        >
          Top places to study in Ghana
        </Text>
      </View>

      <View style={styles.topPlaceContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            onPress={() => {
              setPlacedata(accra);
              setModalVisibility(true);
            }}
          >
            <View style={styles.placeContainer}>
              <Image source={Accra} style={styles.topPlaceImage} />
              <Text>Accra</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              setPlacedata(kumasi);
              setModalVisibility(true);
            }}
          >
            <View style={styles.placeContainer}>
              <Image source={Kumasi} style={styles.topPlaceImage} />
              <Text>Kumasi</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              setPlacedata(cape_coast);
              setModalVisibility(true);
            }}
          >
            <View style={styles.placeContainer}>
              <Image source={Cape_Coast} style={styles.topPlaceImage} />
              <Text>Cape Coast</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              setPlacedata(tamale);
              setModalVisibility(true);
            }}
          >
            <View style={styles.placeContainer}>
              <Image source={Tamale} style={styles.topPlaceImage} />
              <Text>Tamale</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>

      <View>
        <Modal
          visible={modalVisibility}
          onRequestClose={() => {
            setModalVisibility(false);
          }}
        >
          <FlatList
            data={placeData}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => {
              return (
                <View style={styles.FilterPageUniContainer}>
                  <Pressable
                    style={styles.FilterPageUniHeaderContainer}
                    onPress={() => {
                      navigation.navigate("UniData", {
                        university: placeData.find(
                          (uni) => uni.name === item.name
                        ),
                      });
                      setModalVisibility(false);
                    }}
                  >
                    <View style={styles.FilterPageUniHeaderNameContainer}>
                      <Text
                        style={styles.FilterPageUniHeaderNameText}
                      >{`${item.name}`}</Text>
                    </View>

                    <View style={styles.FilterBothContainer}>
                      <View style={styles.FilterPageUniHeaderLocationContainer}>
                        <Image
                          source={Location}
                          style={styles.FilterPageUniHeaderLocationImage}
                        />
                        <Text
                          style={styles.FilterPageUniHeaderLocationText}
                        >{`${item.location}`}</Text>
                      </View>
                      <View style={styles.FilterPageUniHeaderRatingContainer}>
                        <Text style={styles.FilterPageUniHeaderRateText}>
                          {`${item.rate}`}
                        </Text>
                        <View
                          style={styles.FilterPageUniHeaderRatingImageContainer}
                        >
                          <Image
                            source={Star}
                            style={styles.FilterPageUniHeaderLocationImage}
                          />
                        </View>
                      </View>

                      <View>
                        <Text
                          style={styles.FilterPageUniHeaderRateText}
                        >{`${item.type} Inst.`}</Text>
                      </View>
                    </View>

                    <View style={styles.FilterCourseFeesMainContainer}>
                      <View style={styles.FilterCourseFeesContainer}>
                        <Text style={styles.FilterCourseFeesHeadText}>
                          Courses Offered
                        </Text>
                        <View>
                          <Text
                            style={styles.FilterCourseFeesText}
                          >{`5 Courses`}</Text>
                        </View>
                      </View>
                      <View style={styles.FilterCourseFeesContainer}>
                        <Text style={styles.FilterCourseFeesHeadText}>
                          Fee Range
                        </Text>
                        <View>
                          <Text
                            style={styles.FilterCourseFeesText}
                          >{`GHC 1k-12k`}</Text>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                </View>
              );
            }}
          />
        </Modal>
      </View>
    </View>
  );
};

export default Top_Place;
