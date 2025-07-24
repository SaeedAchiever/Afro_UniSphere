import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import { Picker } from "@react-native-picker/picker";


import styles from "./Style";
import VideoBG from "../../assets/vids/bgVid.mp4";

const Email = require("../../assets/email.png");
const Password = require("../../assets/password.png");
const Google = require("../../assets/google.png");

const SignUp = () => {
  const Name = require("../../assets/name.png");
  const Position = require("../../assets/position.png");
  const height = useWindowDimensions().height;

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_Name, setFull_Name] = useState("");
  const [selectedValue, setSelectedValue] = useState("Student");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {!videoLoaded && (
        <View style={styles.preloaderCtn}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}

      <ScrollView
        style={{
          height: height,
        }}
      >
        <View
          style={{
            width: "100%",
            height: height,
            position: "absolute",
          }}
        >
          <Video
            source={VideoBG}
            useNativeControls={false}
            shouldPlay={true}
            isLooping={true}
            resizeMode="cover"
            isMuted={true}
            style={{
              width: "100%",
              height: "100%",
            }}
            onLoad={() => {
              setVideoLoaded(true);
            }}
          />
        </View>
        {videoLoaded && (
          <View style={styles.LogInMainContainer}>
            {/* Note */}
            <View style={[styles.LogInContainer, { flex: 0.3 }]}>
              <View style={styles.LogInWelcomeContainer}>
                <Text style={styles.LogInWelcome}>Afro UniSphere</Text>
              </View>
              <View style={styles.LogInWelcomeContainer}>
                <Text style={styles.LogInNote}>
                  Enter your personal info to continue
                </Text>
              </View>
            </View>

            <View style={[styles.LogInContainer, { flex: 0.4 }]}>
              <View style={styles.inputIconsContainer}>
                <Image source={Name} style={styles.inputIcons} />
                <TextInput
                  placeholder="Full Name"
                  value={full_Name}
                  onChangeText={setFull_Name}
                  style={styles.logInSignUpText}
                />
              </View>
              <View style={styles.inputIconsContainer}>
                <Image source={Position} style={styles.inputIcons} />
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }
                  style={{ height: "100%", width: "90%" }}
                >
                  <Picker.Item label="Student" value="Student" />
                  <Picker.Item label="Applicant" value="Applicant" />
                  <Picker.Item label="Lecturer" value="Lecturer" />
                  <Picker.Item label="Guest" value="Guest" />
                  <Picker.Item label="University Rep" value="University Rep" />
                </Picker>
              </View>
              <View style={styles.inputIconsContainer}>
                <Image source={Email} style={styles.inputIcons} />
                <TextInput
                  placeholder="Your email here"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.logInSignUpText}
                />
              </View>
              <View style={styles.inputIconsContainer}>
                <Image source={Password} style={styles.inputIcons} />
                <TextInput
                  placeholder="Your password here"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true} // This ensures the text appears as a password
                  autoCapitalize="none" // Disables automatic capitalization
                  autoCorrect={false}
                  style={styles.logInSignUpText}
                />
              </View>
              <>
                {loading ? (
                  <ActivityIndicator
                    size="large"
                    color="#fff"
                    style={{ marginBottom: 10 }}
                  />
                ) : (
                  <View style={styles.logInBtn}>
                    <Pressable>
                      <Text style={styles.logInBtnText}>Sign Up</Text>
                    </Pressable>
                  </View>
                )}
              </>
            </View>

            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#cfcfcf",
              }}
            ></View>

            <View style={styles.sociallogIn}>
              <View style={styles.sociallogInbtn}>
                <View style={styles.sociallogInbtnImg}>
                  <Image
                    source={Google}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.logInSignUpBtnText}>
                    Continue With Google
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.LogInContainer, { flex: 0.3 }]}>
              <View style={styles.logInSignUpContainer}>
                <Text style={styles.logInSignUpText}>Already a member?</Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate("LogIn");
                  }}
                >
                  <View style={styles.logInBtnalt}>
                    <Text style={styles.logInSignUpBtnText}>Log In</Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.logInAsGuestContainer}>
                <Pressable
                  onPress={() => {
                    navigation.replace("HomePage");
                  }}
                >
                  <Text style={styles.logInAsGuestText}>
                    Continue as a guest
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default SignUp;
