import { View, Text, FlatList, Linking, Alert } from 'react-native';
import React, { useState } from 'react';
import styles from './Style';
import Scholarships from './Scholarship.json';

import { SafeAreaView } from 'react-native-safe-area-context';
import Head from '../HeadFoot/Head';
import { Pressable } from 'react-native';
import Footer from '../HeadFoot/Footer';

const ScholarshipHome = () => {
  const [selectedId, setSelectedId] = useState(null); // Track the ID of the clicked item

  const openApplicationLink = (url) => {
    if (typeof url === 'string' && url.startsWith('http')) {
      Linking.canOpenURL(url)
        .then((supported) => {
          if (supported) {
            Linking.openURL(url);
          } else {
            Alert.alert("Error", "Unable to open the link.");
          }
        })
        .catch((err) => Alert.alert("Error", err.message));
    } else {
      Alert.alert("Invalid URL", "The link is not valid.");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.ScholarshipMainBodyContainer}>
        <Head />
        <FlatList
          data={Scholarships}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isSelected = selectedId === item.id; // Check if the current item is selected
            return (
              <View style={styles.ScholarshipListBodyContainer}>
                <View>
                  <View>
                    <Text style={styles.ScholarshipMainBodyFlexHeaderText}>{item.name}</Text>
                  </View>

                  <View style={styles.ScholarshipMainBodyFlexContainer}>
                    <View style={styles.ScholarshipSubBodyFlexContainer}>
                      <Text style={styles.ScholarshipSubBodyFlexHeadText}>Valid till</Text>
                      <Text style={styles.ScholarshipSubBodyFlexBodyText}>{item.deadline}</Text>
                    </View>
                    <View style={styles.ScholarshipSubBodyFlexContainer}>
                      <Text style={styles.ScholarshipSubBodyFlexHeadText}>Amount</Text>
                      <Text style={styles.ScholarshipSubBodyFlexBodyText}>{item.amount}</Text>
                    </View>
                    <Pressable onPress={() => openApplicationLink(item.link)}>
                      <View style={styles.ScholarshipButton}>
                        <Text style={styles.ScholarshipButtonText}>Apply</Text>
                      </View>
                    </Pressable>
                  </View>
                </View>

                {/* Details Section */}
                {isSelected && (
                  <View>
                    <View style={{ padding: 10 }}>
                      <Text style={styles.DetailsText}>Hello</Text>
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
                      {isSelected ? 'Hide Details' : 'Details'}
                    </Text>
                  </View>
                </Pressable>
              </View>
            );
          }}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
};



export default ScholarshipHome;
