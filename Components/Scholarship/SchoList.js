import { View, Text, Pressable, Image, Modal } from "react-native";
import React, { useState } from "react";

import styles from "./Style";
import ScholarshipBody from "./ScholarshipBody";
const Close = require("../../assets/close.png");

const SchoList = ({ item, isSelected, setSelectedId }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.ScholarshipListBodyContainer}>
      <View>
        <View>
          <Text style={styles.ScholarshipMainBodyFlexHeaderText}>
            {item.name}
          </Text>
        </View>

        <View style={styles.ScholarshipMainBodyFlexContainer}>
          <View style={styles.ScholarshipSubBodyFlexContainer}>
            <Text style={styles.ScholarshipSubBodyFlexHeadText}>
              Valid till
            </Text>
            <Text style={styles.ScholarshipSubBodyFlexBodyText}>
              {item.deadline}
            </Text>
          </View>
          <View style={styles.ScholarshipSubBodyFlexContainer}>
            <Text style={styles.ScholarshipSubBodyFlexHeadText}>Amount</Text>
            <Text style={styles.ScholarshipSubBodyFlexBodyText}>
              {item.amount}
            </Text>
          </View>
          <View style={styles.ScholarshipButton}>
            <Text style={styles.ScholarshipButtonText}>{`${item.level}`}</Text>
          </View>
        </View>
      </View>

      {/* Details Section */}
      {isSelected && (
        <View>
          <View style={{ padding: 10 }}>
            <Text style={styles.DetailsText}>{`${item.note}`}</Text>
            <View style={styles.ReadMoreButton}>
              <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.ReadMoreButtonText}>Read More</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}

      <Pressable
        onPress={() => {
          setSelectedId(isSelected ? null : item.id); // Toggle selection
        }}
      >
        <View style={styles.Button}>
          <Text style={styles.ButtonText}>
            {isSelected ? "Hide Details" : "Details"}
          </Text>
        </View>
      </Pressable>

      <View>
        <Modal
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={{maxWidth:1400}}>
            <View style={styles.closeIconContainer}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Image source={Close} style={styles.closeIcon} />
              </Pressable>
            </View>

            {/* Body */}

            <ScholarshipBody />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default SchoList;
