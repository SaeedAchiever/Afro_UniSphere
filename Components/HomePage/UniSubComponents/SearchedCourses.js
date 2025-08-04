import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";

import styles from "./style";

const SearchedCourses = () => {
  return (
    <View>
      <View style={styles.landingSearch}>
        <TextInput
          style={styles.landingSearchInput}
          placeholder="Enter your query here..."
        />
      </View>
      <View style={styles.SearchedCoursesContainer}>
        <View style={styles.SearchedCoursesHeadContainer}>
          <View style={styles.recentSearchesContainer}>
            <View style={styles.recentSearchesHeadContainer}>
              <Pressable>
                <Text style={styles.recentSearchesHeadText}>
                  Recent Searches
                </Text>
              </Pressable>

              <Pressable>
                <Text style={styles.recentSearchesClearText}>Clear All</Text>
              </Pressable>
            </View>
            <View style={styles.recentSearchesBodyContainer}>
              <Pressable style={styles.recentSearchesBodySubContainer}>
                <Text style={styles.recentSearchesBodyText}>
                  No Recent Search Available
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.recentSearchesContainer}>
            <View style={styles.recentSearchesHeadContainer}>
              <Text style={styles.recentSearchesHeadText}>
                Popular Searches
              </Text>
            </View>
            <View style={styles.recentSearchesBodySubContainer}>
              <Text style={styles.recentSearchesBodyText}>KNUST</Text>
              <Text style={styles.recentSearchesBodyText}>
                WAEC results realease date
              </Text>
              <Text style={styles.recentSearchesBodyText}>
                2025 cut off UCC entry requirements
              </Text>
              <Text style={styles.recentSearchesBodyText}>
                UG admission date
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchedCourses;
