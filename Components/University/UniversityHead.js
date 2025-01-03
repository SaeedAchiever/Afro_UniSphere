import { View, Text, Image, TextInput, FlatList, Modal, Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, } from 'react';

import styles from '../HomePage/HomeStyle';
import Universities from '../University/universities.json';

const Back = require("../../assets/back.jpg");

const UniversityHead = () => {
  const [searchedData, setSearchedData] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState('none');

  const navigation = useNavigation();

  const searchedList = () => {
    if (searchedData === '') {
      return [];
    }
    return Universities.filter(
      value => value.name.toLowerCase().startsWith(searchedData.toLowerCase())
    );
  };

  return (
    <View>
      <View style={styles.uniHeader}>
        <View style={styles.logoContainer}>
          <View>
            <Text style={styles.logoName}>Afro UniSphere</Text>
          </View>
        </View>

        <View style={styles.searchBarContainer}>
          <View
            onTouchEnd={() => {
              setIsSearchVisible('none');
              setSearchedData('')
            }}
            style={{ display: isSearchVisible }}
          >
            <Image source={Back} style={styles.searchBack} />
          </View>

          <TextInput
            placeholder="Search Here..."
            value={searchedData}
            numberOfLines={1}
            onChangeText={(text) => setSearchedData(text)}
            onFocus={() => {
              setIsSearchVisible('flex');
            }}
            style={styles.searchBar}
          />
        </View>

        <View
         style={[styles.searchContainer, 
         { display: isSearchVisible }]}>
          <FlatList
            data={searchedList()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={styles.searchListContainer}
                  onTouchEnd={() => {
                    navigation.navigate('UniData', { university: item });
                  }}
                >
                  <Text style={styles.searchListText}>{item.name}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default UniversityHead;
