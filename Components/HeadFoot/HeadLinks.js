import { View, Text, Image, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "../../Components/HomePage/HomeStyle";

import { useUser } from "../Authentication/UserContext";
import { auth } from "../../firebaseConfig"; // Import `auth` from your config
import Notification from "../Notifications/Notification";

const CloseBtn = require("../../assets/close.png");
const UserPic = require("../../assets/user_3.jpg");
const Guest = require("../../assets/guest.png");

const HeadLinks = ({ setIsModalVisible }) => {
  

  const { userData } = useUser();

  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(0);
  const [notsShown, setNotsShown] = useState(false);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "EmailLogIn" }],
      });
    });
  };

  return (
    <View key={refreshing} style={styles.modalMainContainer}>
      <View
        onTouchEnd={() => {
          setIsModalVisible(false);
        }}
        style={styles.modalButtonContainer}
      >
        <Image source={CloseBtn} style={styles.modalButtonImage} />
      </View>

      <View style={styles.ModalBodyMainContainer}>
        <Pressable
          onPress={() => {
            userData
              ? navigation.navigate("User_Profile")
              : navigation.navigate("EmailLogIn");
            setIsModalVisible(false);
          }}
        >
          <View style={styles.ModalBodyContainer}>
            <View>
              <Image
                source={userData ? UserPic : Guest}
                style={styles.modalUserImage}
              />
            </View>
            <View>
              <Text style={styles.modalUserText}>
                {userData ? userData.first_Name : "Guest"}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>

      <View style={styles.modalLinksMainContainer}>
        <View style={styles.modalLinksContainer}>
          <Text style={styles.modalLinksText}>My Favorites</Text>
        </View>

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

      {userData ? (
        <View style={styles.logOutContainer}>
          <Pressable onPress={handleSignOut}>
            <Text style={styles.logOutText}>Log out</Text>
          </Pressable>
        </View>
      ) : (
        <View></View>
      )}

      <Modal
        visible={notsShown}
        onRequestClose={() => {
          setNotsShown(false);
        }}
        animationType="slide"
      >
        <Notification />
      </Modal>
    </View>
  );
};

export default HeadLinks;
