import { StatusBar, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UniData from "./Components/Uni_Data/UniData";
import HomePage from "./Components/HomePage/HomePage";
import UniversityHome from "./Components/University/UniversityHome";
import ScholarshipHome from "./Components/Scholarship/ScholarshipHome";
import ShopHome from "./Components/Shop/ShopHome";
import Updates from "./Components/Updates/Updates";
import CollegeHome from "./Components/College/CollegeHome";
import Shorts from "./Components/Shorts/Shorts";
import User_Profile from "./Components/User_Profile/User_Profile";
import LogIn from "./Components/Authentication/LogIn";
import SignUp from "./Components/Authentication/SignUp";

import MatchForm from "./Components/MatchMe/MatchForm";

import Demo from "./Demo";

const Stack = createNativeStackNavigator();

// Define Linking Configuration
const linking = {
  prefixes: ["http://localhost:19006", "https://yourapp.com"], // Adjust this based on your deployment
  config: {
    screens: {
      Home: "/", // Maps to root URL
      Details: "/details", // Maps to /details
    },
  },
};

const RenderData = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName={"Updates"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="MatchForm" component={MatchForm} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="UniData" component={UniData} />
        <Stack.Screen name="UniversityHome" component={UniversityHome} />
        <Stack.Screen name="ScholarshipHome" component={ScholarshipHome} />
        <Stack.Screen name="ShopHome" component={ShopHome} />
        <Stack.Screen name="Updates" component={Updates} />
        <Stack.Screen name="CollegeHome" component={CollegeHome} />
        <Stack.Screen name="Shorts" component={Shorts} />
        <Stack.Screen name="User_Profile" component={User_Profile} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};

const AppStuff = () => {
  return <RenderData />;
};
export default AppStuff;
