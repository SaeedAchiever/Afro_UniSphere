import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [fetchedata, setFetcheddata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/SaeedAchiever/Afro_UniSphere/refs/heads/master/Components/University/universities.json"
        );
        const data = await res.json();
        setFetcheddata(data);
      } catch (error) {
        console.error;
      } finally {
      }
    };
    getData();
  }, []);

  console.log(fetchedata);

  return (
    <View>
      <Text>Hello</Text>
      {/* {fetchedata.map((res) => {
        return (
          <View key={res.id}>
            <Text>{res.name}</Text>
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
    </View>
  );
};

export default Demo;
