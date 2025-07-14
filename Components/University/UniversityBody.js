import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../HomePage/HomeStyle";
import Universities from "../University/universities.json";

const Location = require("../../assets/location.png");
const Star = require("../../assets/star.png");

const UniversityBody = () => {

  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const [data, setData] = useState(Universities); // Initially load first 5 items

  return (
    <View style={styles.allschoolsHome}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        nestedScrollEnabled={true}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.UniHomeMainContainer}>
                <View style={styles.UniHomeContainer}>
                  <View
                    style={[
                      styles.UniHomeImageContainer,
                      {
                        height: width > 500 ? 250 : 150,
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={styles.UniHomeImage}
                      resizeMode="cover"
                    />
                  </View>

                  <View style={styles.UniHomeTextContainer}>
                    <Text style={styles.UniHomeText}>{item.name}</Text>
                  </View>

                  <View style={styles.uniMainHomeLocNCampContainer}>
                    <View style={styles.uniMainHomeLocContainer}>
                      <View style={styles.uniMainHomeLocImageContainer}>
                        <Image
                          source={Location}
                          style={styles.uniMainHomeLocImage}
                        />
                      </View>
                      <View>
                        <Text style={styles.uniMainHomeLocText}>
                          {`${item.town}, ${item.location}`}
                        </Text>
                      </View>

                      <View
                        style={{
                          width: 2,
                          backgroundColor: "#000",
                          height: 20,
                          marginLeft: 10,
                        }}
                      />
                    </View>
                    <View>
                      <Text style={styles.uniMainHomeLocText}>
                        {`${item.campus_number} Campuses`}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.uniMainHomeReviewContainer}>
                    <View style={styles.uniMainHomeReviewImageContainer}>
                      <Image source={Star} style={styles.Revstar} />
                    </View>
                    <View style={styles.uniMainHomeReviewTextContainer}>
                      <Text style={styles.uniMainHomeReviewText}>
                        {`${item.reviews} Reviews`}
                      </Text>
                    </View>

                    <View
                      style={{
                        width: 2,
                        backgroundColor: "#000",
                        height: 30,
                        marginLeft: 10,
                      }}
                    />

                    <View style={styles.reviewButton}>
                      <Text style={styles.uniMainHomeReviewText}>
                        {`${item.type} Inst`}
                      </Text>
                    </View>
                  </View>

                  <Pressable
                    style={styles.ReadButton}
                    onPress={() => {
                      navigation.navigate("UniData", { university: item });
                    }}
                  >
                    <Text style={styles.ReadButtonText}>Read More</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default UniversityBody;
