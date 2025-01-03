import { View, Text,useWindowDimensions,Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

import styles from './style'

import ListImage from "../../assets/accra.jpg"


const ShopHeader = () => {

  const width = useWindowDimensions().width

  return (
    <View style={[styles.ShopHeaderMainContainer, {
      height: width > 700 ? 250 : 170
    }]}>
        <Swiper  autoplay showsPagination={false}>

          <View style={styles.ShopHeaderContainer}>
            <View style={styles.ShopHeaderImage}>
              <Image
                source={ListImage}
                style={styles.ListImage}
              />
            </View>
            <View style={styles.ShopHeaderTextContainer}>
            <Text style={styles.text}>Start your admission journey Now, with us !!!</Text>
            </View>
          </View>

          <View style={styles.ShopHeaderContainer}>
            <View style={styles.ShopHeaderImage}>
              <Image
                source={ListImage}
                style={styles.ListImage}
              />
            </View>
            <View style={styles.ShopHeaderTextContainer}>
            <Text style={styles.text}>University Of Ghana Undergraduate E-Voucher</Text>
            </View>
          </View>

          <View style={styles.ShopHeaderContainer}>
            <View style={styles.ShopHeaderImage}>
              <Image
                source={ListImage}
                style={styles.ListImage}
              />
            </View>
            <View style={styles.ShopHeaderTextContainer}>
            <Text style={styles.text}>UDS Entrance Exams</Text>
            </View>
          </View>

        </Swiper>
      </View>
  )
}

export default ShopHeader