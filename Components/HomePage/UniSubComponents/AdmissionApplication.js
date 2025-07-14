import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import styles from "../HomeStyle";
import { Modal } from "react-native";
import ApplicationModal from "./ApplicationModal";

const Applicant = require("../../../assets/applicant.webp");
const Close = require("../../../assets/close.png");

const AdmissionApplication = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const width = useWindowDimensions().width;

  return (
    <View style={[styles.myMatchContainer, { width: width > 760 ? 450 : 320 }]}>
      <View
        style={[
          styles.applicationImageContainer,
          {
            height: width > 500 ? 250 : 200,
          },
        ]}
      >
        <Image source={Applicant} style={styles.Applicant} />
      </View>
      <Text style={styles.myMatchText}>
        Did you know you can apply for an admission to your dream university
        fully here without leaving your home ? ? ?
      </Text>
      <Pressable
        style={styles.myMatchBtn}
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <Text style={styles.myMatchBtnText}>Learn more</Text>
      </Pressable>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <Pressable
          onPress={() => {
            setIsModalVisible(false);
          }}
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            zIndex: 100,
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={Close}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </Pressable>
        <ApplicationModal />
      </Modal>
    </View>
  );
};

export default AdmissionApplication;
