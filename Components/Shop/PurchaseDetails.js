import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";

import styles from "./style";
import { TouchableOpacity } from "react-native";

const PurchaseDetails = ({ data }) => {
  const width = useWindowDimensions().width;

  return (
    <View style={styles.purchaseDetailsMainContainer}>
      <ScrollView>
        <View
          style={[
            styles.purchaseDetailsContainer,
            {
              height: width > 550 ? 270 : 160,
            },
          ]}
        >
          <Image
            source={{ uri: data.image }}
            resizeMode={cover}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>

        <View style={styles.PurchaseDetailsText}>
          <Text style={styles.PurchaseDetails}>{`${data.name}`}</Text>
          <Text
            style={[styles.PurchaseDetails, { fontWeight: "700" }]}
          >{`GHC ${data.price}`}</Text>
        </View>

        <View style={styles.AllInputsContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              value={data.name}
              readOnly
              style={styles.textInput}
              numberOfLines={1}
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="First Name..."
              style={styles.textInput}
              numberOfLines={1}
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Last Name..."
              style={styles.textInput}
              numberOfLines={1}
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Your Email..."
              style={styles.textInput}
              numberOfLines={1}
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Phone Number..."
              style={styles.textInput}
              numberOfLines={1}
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Add Any Note (Optional)"
              style={styles.textInput}
            />
          </View>

          <TouchableOpacity
            style={{
              width: 120,
              backgroundColor: "#333",
              paddingVertical: 10,
              alignSelf: "flex-end",
              marginRight: 15,
              borderRadius: 20,
            }}
          >
            <Text style={styles.text}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PurchaseDetails;
