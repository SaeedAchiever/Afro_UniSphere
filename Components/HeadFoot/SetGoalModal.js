import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const SetGoalModal = () => {
  return (
    <View style={styles.setGoalContainer}>
      <View>
       <Text>Your current target : Not selected</Text>
      </View>
    </View>
  )
}

export default SetGoalModal