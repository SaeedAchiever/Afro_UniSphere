import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const GetData = () => {
  const [fetchedata, setFetcheddata] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/SaeedAchiever/Afro_UniSphere/refs/heads/master/Components/University/smallList.json"
        );
        const data = await res.json();
        setFetcheddata(data);
      } catch (error) {
        console.error;
      } finally {
      }
    };
    FetchData();
  }, []);

  console.log(fetchedata);

  return (
    <View style={{ marginTop: 80 }}>
      <Text>Hello</Text>
      {/* {fetchedata.map((res) => {
        return (
          <View key={res.id}>
            <Text>{res.name}</Text>
          </View>
          </View>
        );
      })} */}

      <FlatList
        data={fetchedata}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <Text>Fix all expo-av videos</Text>
    </View>
  );
};

export default GetData;
