import React, { useState } from 'react';
import { View, Text, useWindowDimensions, Image, TextInput, ScrollView, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './Style';

const UserBG = require("../../assets/ug.jpeg");
const MainUser = require("../../assets/user_1.jpg");

const EditProfile = () => {
  const width = useWindowDimensions().width;

  return (
    <ScrollView>
      <View style={styles.EditProfileMainContainer}>
        <View>
          <View style={[styles.profileHeaderUserBGContainer, { height: width > 600 ? 150 : 110 }]}>
            <Image source={UserBG} style={styles.profileHeaderUserBGImage} />
          </View>
          <View style={[styles.MainUserImageContainer, { marginTop: -30 }]}>
            <Image source={MainUser} style={styles.MainUserImage} />
          </View>
        </View>

        <View style={styles.EditProfileBodyContainer}>
          {/* First Name */}
          <View style={styles.EditProfileTextContainer}>
            <TextInput
              // value={first_Name}
              numberOfLines={1}
              // onChangeText={setFirst_Name}
              placeholder="First Name"
              style={styles.EditProfileTextInput}
            />
          </View>

          {/* Other Name */}
          <View style={styles.EditProfileTextContainer}>
            <TextInput
              // value={other_Name}
              numberOfLines={1}
              // onChangeText={setOther_Name}
              placeholder="Other Name"
              style={styles.EditProfileTextInput}
            />
          </View>

          {/* Username */}
          <View style={styles.EditProfileTextContainer}>
            <TextInput
              // value={`${username}`}
              numberOfLines={1}
              // onChangeText={setUsername}
              placeholder="Username"
              style={styles.EditProfileTextInput}
            />
          </View>

          <View style={[styles.EditProfileTextContainer,{justifyContent:'center'}]}>
          <Picker
            // selectedValue={selectedValue}
            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            style={{ height: '100%', width: '90%' }}
         >
            <Picker.Item label="Student" value="Student" />
            <Picker.Item label="Applicant" value="Applicant" />
            <Picker.Item label="Lecturer" value="Lecturer" />
            <Picker.Item label="Guest" value="Guest" />
            <Picker.Item label="University Rep" value="University Rep" />
         </Picker>
          </View>
        </View>

        {/* Save Button */}
        <View style={styles.saveBtn}>
          <Pressable>
            <Text style={styles.saveBtnText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
