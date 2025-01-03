import { View, Text,useWindowDimensions,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


import styles from '../../Components/HomePage/HomeStyle'

const Home  = require("../../assets/home.png")
const University  = require("../../assets/university.png")
const College  = require("../../assets/college.png")
const Shorts  = require("../../assets/vid_icon.png")
const Shop  = require("../../assets/cart.png")

const Footer = () => {

                    // DEFINING  WIDTH AND HEIGHT 
      const deviceWidth = useWindowDimensions().width

      const navigation = useNavigation()


  return (
    <View style={styles.footerMainContainer}>
    <View style={styles.footerContainer}>
      <View
      style={styles.footerBox}
       onTouchEnd={()=>{
         navigation.navigate('HomePage')
       }}
      >
        <Image  
          source={Home}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Home</Text>
      </View>
 
      <View
      style={styles.footerBox}
       onTouchEnd={
        ()=>  navigation.navigate('UniversityHome')
      }>
        <Image  
          source={University}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Universities</Text>
      </View>
 
      <View
      style={styles.footerBox}
       onTouchEnd={()=>{
         navigation.navigate('CollegeHome')
       }}
      >
        <Image  
          source={College}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Colleges</Text>
      </View>
 
      <View
      style={styles.footerBox}
       onTouchEnd={()=>{
         navigation.navigate('Shorts')
       }}
      >
        <Image
          source={Shorts}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Shorts</Text>
      </View>
 
      <View
      style={styles.footerBox}
       onTouchEnd={()=>{
         navigation.navigate('ShopHome')
       }}
      >
        <Image  
          source={Shop}
          style={styles.footerImage}
        />
        <Text
        style={{
          fontSize: deviceWidth >  500 ? 12 : 10,
        }}
        >Shop</Text>
      </View>
    </View>
       </View>
  )
}

export default Footer