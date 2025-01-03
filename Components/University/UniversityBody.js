import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../HomePage/HomeStyle';
import Universities from '../University/universities.json';

const Location = require("../../assets/location.png");
const Star = require("../../assets/star.png");

const UniversityBody = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(Universities.slice(0, 5)); // Initially load first 5 items
  const [loading, setLoading] = useState(false); // Preloader state
  const [page, setPage] = useState(1); // Current page
  const itemsPerPage = 5; // Number of items to load per page

  const loadMoreData = () => {
    if (loading) return;

    setLoading(true);

    // Simulate data fetching
    setTimeout(() => {
      const nextPage = page + 1;
      const newItems = Universities.slice(
        page * itemsPerPage,
        nextPage * itemsPerPage
      );

      if (newItems.length > 0) {
        setData((prevData) => [...prevData, ...newItems]);
        setPage(nextPage);
      }

      setLoading(false);
    }, 1000); // Simulate network delay
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        nestedScrollEnabled={true}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.UniHomeMainContainer}>
                <View style={styles.UniHomeContainer}>
                  <View style={styles.UniHomeImageContainer}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.UniHomeImage}
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

                  <View
                    style={styles.ReadButton}
                    onTouchEnd={() => {
                      navigation.navigate("UniData", { university: item });
                    }}
                  >
                    <Text style={styles.ReadButtonText}>Read More</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        onEndReached={loadMoreData} // Trigger loading more data
        onEndReachedThreshold={0.5} // Trigger when 50% away from the end
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : null
        } // Show loader at the bottom
      />
    </View>
  );
};

export default UniversityBody;