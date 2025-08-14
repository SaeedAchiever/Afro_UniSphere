import {
  View,
  Text,
  ScrollView,
  TextInput,
  Modal,
  Image,
  Pressable,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import Universities from "../University/universities.json";
import styles from "./MatchStyle";
import MatchUniversities from "./MatchUniversities";

const Close = require("../../assets/close.png");
const Back = require("../../assets/back.jpg");

const MatchForm = () => {
  const [isUniVisible, setIsUniVisible] = useState(false);
  const [searchedData, setSearchedData] = useState("");
  const [filteredUnis, setFilteredUnis] = useState([]);
  const [isUniListVisible, setIsUniListVisible] = useState(false);

  const handleSearch = (text) => {
    setSearchedData(text);

    if (text.trim().length > 0) {
      const results = Universities.filter((uni) =>
        uni.name.toLowerCase().startsWith(text.toLowerCase())
      );
      setFilteredUnis(results);
      setIsUniListVisible(results.length > 0);
    } else {
      setIsUniListVisible(false);
      setFilteredUnis([]);
    }
  };

  return (
    <View style={styles.MatchHomeMainContainer}>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Header */}
        <View style={styles.MatchHomeHeadContainer}>
          <Text style={styles.MatchHomeHeadText}>
            Complete the form below to get recommended to Courses you're
            eligible to offer in your dream University
          </Text>
        </View>

        {/* University Search */}
        <View style={styles.MatchHomeCourseContainer}>
          <Text style={styles.MatchHomeCourseText}>
            Which University would you love to attend
          </Text>

          <View style={styles.courseInputContainer}>
            {isUniListVisible && (
              <Pressable
                onPress={() => {
                  setSearchedData("");
                  setIsUniListVisible(false);
                }}
              >
                <Image source={Back} style={{ width: 35, height: 35 }} />
              </Pressable>
            )}

            <TextInput
              style={styles.courseInput}
              placeholder="Start typing then choose"
              value={searchedData}
              onChangeText={handleSearch}
            />
          </View>

          {isUniListVisible && (
            <FlatList
              nestedScrollEnabled
              style={{ maxHeight: 200, marginTop: 5 }}
              data={filteredUnis}
              keyExtractor={(item) => item.id?.toString()}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    setSearchedData(item.name);
                    setIsUniListVisible(false);
                  }}
                  style={{ paddingVertical: 8 }}
                >
                  <Text>{item.name}</Text>
                </Pressable>
              )}
            />
          )}

          {/* Disclaimer */}
          <View style={styles.matchDisclaimer}>
            <Text style={styles.matchDisclaimerTitle}>Disclaimer</Text>
            <Text style={styles.matchDisclaimerText}>
              We do not store your results, it's only used as you intend and
              discarded afterwards.
            </Text>
          </View>
        </View>

        {/* Core Subjects */}
        <View style={styles.coreContainer}>
          <Text style={styles.coreText}>Core Subjects</Text>
          {["Mathematics", "English Lang.", "Science", "Social Studies"].map(
            (subject, idx) => (
              <View key={idx} style={styles.coreTextMainContainer}>
                <View style={styles.coreTextContainer}>
                  <Text style={styles.coreMainText}>{subject}</Text>
                </View>
                <View style={styles.coreGradeContainer}>
                  <TextInput placeholder="....." style={styles.gradeText} />
                </View>
              </View>
            )
          )}
        </View>

        {/* Electives */}
        <View style={styles.coreContainer}>
          <Text style={styles.coreText}>Elective Subjects</Text>
          <Text style={styles.electiveText}>
            Enter your best three elective below
          </Text>

          {Array(3)
            .fill(null)
            .map((_, idx) => (
              <View key={idx} style={styles.coreTextMainContainer}>
                <View style={styles.coreTextContainer}>
                  <TextInput
                    style={styles.coreMainText}
                    placeholder="Type to choose"
                  />
                </View>
                <View style={styles.coreGradeContainer}>
                  <TextInput placeholder="....." style={styles.gradeText} />
                </View>
              </View>
            ))}
        </View>

        {/* Button */}
        <Pressable
          style={styles.matchButton}
          onPress={() => {
            alert(searchedData);
          }}
          // onPress={() => setIsUniVisible(true)}
        >
          <Text style={styles.matchButtonText}>Match Me</Text>
        </Pressable>
      </ScrollView>

      {/* Modal */}
      <Modal visible={isUniVisible} animationType="slide">
        <Pressable
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            zIndex: 100,
          }}
          onPress={() => setIsUniVisible(false)}
        >
          <Image source={Close} style={{ width: 35, height: 35 }} />
        </Pressable>
        <View>
          <MatchUniversities />
        </View>
      </Modal>
      <StatusBar />
    </View>
  );
};

export default MatchForm;
