import { View, Text,useWindowDimensions, Image } from 'react-native'
import React, {useState} from 'react'

import styles from '../HomeStyle'
import { Modal } from 'react-native'
import ApplicationModal from './ApplicationModal'

const Applicant = require("../../../assets/applicant.webp")

const AdmissionApplication = () => {

 const [isModalVisible,  setIsModalVisible] = useState(false)

 const width = useWindowDimensions().width

 
  return (
   <View style={[styles.myMatchContainer, {width : width > 760 ? 450 : 320}]}>
    <View style={[styles.applicationImageContainer, {
     height : width > 500 ? 250 : 200
    }]}>
     <Image 
      source={Applicant}
      style={styles.Applicant}
     />

    </View>
    <Text style={styles.myMatchText}>
     Did you know you can apply for an admission to your dream university 
     fully here without leaving your home ? ? ?
    </Text>
    <View
     style={styles.myMatchBtn}
     onTouchEnd={()=>{
      setIsModalVisible(true)
     }}
     
    >
      
     <Text style={styles.myMatchBtnText}>Learn more</Text>
    </View>

    <Modal
     visible={isModalVisible}
     onRequestClose={()=>{
      setIsModalVisible(false)
     }}
     >
      <ApplicationModal />

    </Modal>
   </View>
  )
}

export default AdmissionApplication