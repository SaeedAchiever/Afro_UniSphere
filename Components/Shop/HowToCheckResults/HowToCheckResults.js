import { View, Text,Modal,Image } from 'react-native'
import React, { useState } from 'react'

import styles from '../../HomePage/HomeStyle'
const Close  =  require('../../../assets/close.png')


const HowToCheckResults = () => {

 const [isMatchVisible, setIsMatchVisible] = useState(false)
  return (
   <View style={styles.HomeMainScholarshipContainer}>
   <View style={styles.HomeScholarshipHeaderContainer}>
     <View>
       <Text style={styles.HomeScholarshipHeaderText}>How to check your results ? ? ? </Text>
     </View>

   </View>

     <View style={styles.myMatchContainer}>
        <Text style={styles.myMatchText}>
         Its much convinient to check your results personally without having anyone
         to spy you :)
        </Text>
        <View
         style={styles.myMatchBtn}
         onTouchEnd={()=>{
          setIsMatchVisible(true)
         }}
        >
          
         <Text style={styles.myMatchBtnText}>Start Now</Text>
        </View>
     </View>

     <Modal 
      visible={isMatchVisible}
      animationType='fade'
    >
      <View 
        onTouchEnd={()=>{
          setIsMatchVisible(false)
        }}
        style={{
          position:'absolute',
        right:20,top:20,
        zIndex:100
        }}
      >
        <Image 
          source={Close}
          style={{
            width:35,
            height:35
          }}
        />
      </View>

     </Modal>
    </View>
  )
}

export default HowToCheckResults