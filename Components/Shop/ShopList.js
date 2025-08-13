import { View, Text, FlatList, useWindowDimensions, Image } from "react-native";
import React, { useState } from "react";
import styles from "./style";

import shopItems from "./list.json";

import ListImage from "../../assets/ug.jpeg";

const ShopList = () => {
  const width = useWindowDimensions().width;

  const numColumns = width > 700 ? 3 : 2;
  const setwidth = width > 700 ? "32%" : "48%";
  // const setHeight = width > 670 ? 180 : 110;

  return (
    <View style={styles.mainShopListContainer}>
      <View style={styles.mainShopListContainerHeader}>
        <Text style={styles.mainShopListContainerHeaderText}>
          Purchase all your e-vouchers here, secured and best possible prices
        </Text>
      </View>

      <FlatList
        data={shopItems}
        numColumns={numColumns}
        renderItem={({ item }) => {
          return (
            <View style={[styles.shopListItems, { width: setwidth }]}>
              <View style={styles.shopListItemsImageContainer}>
                <Image
                  source={ListImage}
                  style={styles.shopListItemsImage}
                  resizeMode="cover"
                />
                <View style={styles.shopListItemsType}>
                  <Text
                    style={styles.text}
                    numberOfLines={1}
                    ellipsizeMode="ellipses"
                  >{`${item.level}`}</Text>
                </View>
              </View>

              <View style={styles.ListTextContainer}>
                <View>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontWeight: "700",
                        textAlign: "left",
                      },
                    ]}
                  >{` GHC ${item.price}`}</Text>
                </View>
                <View>
                  <Text
                    numberOfLines={2}
                    style={styles.text}
                  >{`${item.name}`}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ShopList;
