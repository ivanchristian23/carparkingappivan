import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'


const IndexAdmin = ({navigation}) => {
  return (
    <View>
      <Button title='Add Parking Area' onPress={()=>navigation.replace("AddArea")}/>
      <Button title='Add Parking Lots' onPress={()=>navigation.replace("AddParking")}/>
    </View>
  )
}

export default IndexAdmin

const styles = StyleSheet.create({})