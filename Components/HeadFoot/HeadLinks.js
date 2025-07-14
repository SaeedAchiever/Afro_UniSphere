import { View, Text, Image, Pressable, Modal } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "../../Components/HomePage/HomeStyle";

import Notification from "../Notifications/Notification";

import SetGoalModal from "./SetGoalModal";

const CloseBtn = require("../../assets/close.png");
const UserPic = require("../../assets/user_3.jpg");

const HeadLinks = ({ setIsModalVisible }) => {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(0);
  const [notsShown, setNotsShown] = useState(false);
  const [goalModal, setGoalModal] = useState(false);

  return (
    <View key={refreshing} style={styles.modalMainContainer}>
      <Pressable
        onPress={() => {
          setIsModalVisible(false);
        }}
        style={styles.modalButtonContainer}
      >
        <Image source={CloseBtn} style={styles.modalButtonImage} />
      </Pressable>

      <View style={styles.ModalBodyMainContainer}>
        <View style={styles.ModalBodyContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("User_Profile");
              setIsModalVisible(false);
            }}
          >
            <View style={styles.userInfo}>
              <View>
                <Image source={UserPic} style={styles.modalUserImage} />
              </View>
              <View>
                <Text style={styles.modalUserText}>Guest</Text>
              </View>
            </View>
          </Pressable>
          <View style={styles.setgoalContainer}>
            <Pressable
              onPress={() => {
                setGoalModal(true);
              }}
            >
              <Text style={styles.setgoalText}>Set Goal</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.modalLinksMainContainer}>
        <View style={styles.modalLinksContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("ScholarshipHome");
              setIsModalVisible(false);
            }}
          >
            <Text style={styles.modalLinksText}>Scholarships</Text>
          </Pressable>
        </View>

        <View style={styles.modalLinksContainer}>
          <Pressable
            onPress={() => {
              setNotsShown(true);
            }}
          >
            <Text style={styles.modalLinksText}>Notifications</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => {
            setIsModalVisible(false);
            navigation.navigate("MatchForm");
          }}
        >
          <View style={styles.modalLinksContainer}>
            <Text style={styles.modalLinksText}>Match me</Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            setIsModalVisible(false);
            navigation.navigate("Updates");
          }}
        >
          <View style={styles.modalLinksContainer}>
            <Text style={styles.modalLinksText}>Updates</Text>
          </View>
        </Pressable>

        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>About Us</Text>
        </View>

        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>Contact</Text>
        </View>
        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>Suggest a feature</Text>
        </View>

        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>Rate This App</Text>
        </View>
      </View>

      <View style={styles.logOutContainer}>
        <Pressable>
          <Text style={styles.logOutText}>Log out</Text>
        </Pressable>
      </View>

      <Modal
        visible={notsShown}
        onRequestClose={() => {
          setNotsShown(false);
        }}
        animationType="slide"
      >
        <Notification />
      </Modal>

      <Modal
        visible={goalModal}
        onRequestClose={() => {
          setGoalModal(false);
        }}
      >
        <SetGoalModal />
      </Modal>
    </View>
  );
};

export default HeadLinks;
