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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";

import styles from "./Style";
import VideoBG from "../../assets/vids/bgVid.mp4";

const Email = require("../../assets/email.png");
const Password = require("../../assets/password.png");
const Google = require("../../assets/google.png");

const LogIn = () => {
  const height = useWindowDimensions().height;

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          display: videoLoaded ? "flex" : "none",
        }}
      >
        <View
          style={{
            width: "100%",
            height: height,
            minHeight: 700,
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
                <Text style={styles.LogInWelcome}>Welcome back</Text>
              </View>
              <View style={styles.LogInWelcomeContainer}>
                <Text style={styles.LogInNote}>
                  Enter your log in info to continue
                </Text>
              </View>
            </View>

            <View style={[styles.LogInContainer, { flex: 0.4 }]}>
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

              <View style={styles.login_psswdreset}>
                <View style={styles.password_resetcontainer}>
                  <Text style={styles.logInAsGuestText}>
                    Forgot your password?
                  </Text>
                </View>
                {loading ? (
                  <ActivityIndicator size="large" color="#fff" />
                ) : (
                  <View style={styles.logInBtn}>
                    <Pressable>
                      <Text style={styles.logInBtnText}>Log In</Text>
                    </Pressable>
                  </View>
                )}
              </View>
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
                <View style={styles.sociallogInbtnTxt}>
                  <Text style={styles.logInSignUpBtnText}>
                    Continue With Google
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.LogInContainer, { flex: 0.3 }]}>
              <View style={styles.logInSignUpContainer}>
                <Text style={styles.logInSignUpText}>Not a member yet?</Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  <View style={styles.logInBtnalt}>
                    <Text style={styles.logInSignUpBtnText}>Sign Up</Text>
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

export default LogIn;
