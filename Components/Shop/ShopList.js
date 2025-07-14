import { View, Text, FlatList,useWindowDimensions,Image } from 'react-native'
import React, { useState } from 'react'
import styles from "./style"

import shopItems from "./list.json"

import ListImage from "../../assets/ug.jpeg"

const ShopList = () => {

const width = useWindowDimensions().width

const numColumns = width > 670 ? 3 : 2
const setwidth = width > 670 ? "32%" : "47%"
const setHeight = width > 670 ? 180 : 110

  return (
   <View style={styles.mainShopListContainer}>
     <FlatList 
      data={shopItems}
      numColumns={numColumns}
      renderItem={({item})=>{
       return (
        <View style={[styles.shopListItems, {width: setwidth}]}>
         <View style={[styles.shopListItemsImage, {height : setHeight}]}>
          <Image 
           source={ListImage}
           style={{width:"100%",height:"100%",borderTopLeftRadius:10,borderTopRightRadius:10}}
          />
         </View>
         <View style={[styles.shopListItemsType, {
           top:5,
           left:5,
         }]}>
          <Text style={{color:'#fff'}}>{`${item.level}`}</Text>
         </View>

         <View style={styles.ListTextContainer}>
         <View>
            <Text style={[styles.text, {
              fontWeight:'700',
              textAlign:'left',
              paddingVertical:10
            }]}>{` GHC ${item.price}`}</Text>
          </View>
          <View>
           <Text style={styles.text}>{`${item.name}`}</Text>
          </View>
         </View>
         
        </View>
       )
      }}
     />
   </View>
  )
}

export default ShopList