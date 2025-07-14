import { View, Text, FlatList, Image, useWindowDimensions, Modal } from 'react-native'
import React, { useState } from 'react'

import styles from './style'
import List from "./Checkers.json"
import { Pressable } from 'react-native'

import Close from "../../assets/close.png"
import PurchaseDetails from './PurchaseDetails'

const ResultsChecker = () => {

 const [isModalVisible, setIsModalVisible] = useState(false)
 const [selectedItem, setSelectedItem] = useState(null) // State to hold the selected item

 const width = useWindowDimensions().width

 const renderItem = ({ item }) => {
  return (
     <View style={[styles.checkerMainContainer, {
      width: width > 670 ? 190 : 140,
      height: width > 670 ? 160 : 110
     }]}>
      <Pressable onPress={() => {
        setSelectedItem(item) // Set the selected item
        setIsModalVisible(true) // Show the modal
      }}>
       <View style={styles.checkerContainer}>
        <Image 
         source={{ uri: item.image }}
         style={{
          width: '100%',
          height: '80%',
          resizeMode: 'cover',
          borderRadius: 10,
         }}
        />
        <Text style={styles.text}>{`GHC ${item.price}`}</Text>
       </View>
      </Pressable>
     </View>
  )
 }

 return (
   <View>
     <FlatList 
       scrollEnabled
       showsHorizontalScrollIndicator={false}
       horizontal
       data={List}
       renderItem={renderItem}
     />

     <Modal
       visible={isModalVisible}
       onRequestClose={() => {
         setIsModalVisible(false)
       }}
     >
         <View>
          <Pressable onPress={() => {
           setIsModalVisible(false) // Hide the modal
           setSelectedItem(null) // Clear the selected item
          }}>
            <Image 
             source={Close}
             style={{
              width:40,
              height:40,
              position:'absolute',
              right:5,
              top:5,
              zIndex:10
             }}
            />
          </Pressable>

          {selectedItem && (
            <View style={{
             zIndex:-1
            }}>
              <PurchaseDetails data={selectedItem}/>
            </View>
          )}
         </View>
      </Modal>
   </View>
  )
}

export default ResultsChecker
