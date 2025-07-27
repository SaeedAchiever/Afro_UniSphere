import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import styles from "../Style";

const NewsImage = require("../../../assets/knust.jpeg");

const Social_Media = [
  {
    name: "Facebook",
    icon: require("../../../assets/facebook.png"),
    link: "https://facebook.com",
  },
  { name: "X", icon: require("../../../assets/x.png"), link: "https://x.com" },
  {
    name: "WhatsApp",
    icon: require("../../../assets/whatsapp.png"),
    link: "https://whatsapp.com",
  },
  {
    name: "Telegram",
    icon: require("../../../assets/telegram.png"),
    link: "https://telegram.org",
  },
  {
    name: "Clipboard",
    icon: require("../../../assets/clipboard.png"),
    link: "copy-to-clipboard",
  },
];

const NewsBody = () => {
  const width = useWindowDimensions().width;

  return (
    <View style={styles.NewsBodyContainer}>
      <View style={styles.NewsBodyHeaderContainer}>
        <Text style={styles.NewsBodyHeaderTitle}>
          KNUST admissions for 2025 opened
        </Text>
        <Text style={styles.date}>July 20, 2025</Text>
        <View
          style={[
            styles.NewsBodyImageContainer,
            { height: width > 600 ? 300 : 250 },
          ]}
        >
          <Image
            source={NewsImage}
            style={styles.NewsBodyImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.socialMediaBTNContainer}>
          {Social_Media.map((item, index) => (
            <Pressable style={styles.socialMediaBTN} key={index}>
              <Image
                key={index}
                source={item.icon}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default NewsBody;
