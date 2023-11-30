import { StyleSheet, Text, View,Button } from 'react-native'
 import React, { useState } from 'react'
 import DateTimePicker from '@react-native-community/datetimepicker'
 import { Platform } from 'react-native'

 const TimePickerScreen = () => {
     const [date,setDate] = useState(new Date())
     const [mode,setMode] = useState('date')
     const [show,setShow]  =useState(false)
     const [text,setText] = useState('Empty')
     const [stime,setSTime] = useState('Empty')
     const [etime,setETime] = useState('Empty')
     const onChange = (event, selectedDate)=>{
         const currentDate = selectedDate || date;
         setShow(Platform.OS === 'ios')
         setDate(currentDate)
         let tempDate = new Date(currentDate);
         let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
         let fTime = 'Hours' + tempDate.getHours() + ' | Minutes' + tempDate.getMinutes();
         let etime = 'Hours' + tempDate.getHours() + ' | Minutes' + tempDate.getMinutes();
         setText(fDate+ '\n' + fTime)
         setETime(etime)
         setSTime(fTime)
         console.log(fDate + '(' + fTime+ ')');
     }
     const showMode = (currentMode) =>{
         setShow(true)
         setMode(currentMode)
     }
   return (
     <View style={{justifyContent:'space-between'}}>
      
       {/* <Text style={{fontSize:20}}>{text}</Text>
       <Text style={{fontSize:20}}>{stime}</Text>
       <Text style={{fontSize:20}}>{etime}</Text>
       <Button title='Pick a Date' onPress={()=> showMode('date')}/>
       <Button title='Pick Starting Time' onPress={()=> showMode('time')}/>
       <Button title='Pick Ending  Time' onPress={()=> showMode('time')}/> */}
       {/* {show &&(
        )} */}
         <DateTimePicker
         testID='dateTimePicker'
         value={date}
         mode={mode}
         is24Hour={true}
         display='inline'
         onChange={onChange}
       />
       {/* <DateTimePicker
         testID='dateTimePicker'
         value={date}
         mode={mode}
         is24Hour={true}
         display='inline'
         onChange={onChange}
       /> */}
     </View>
   )
 }

 export default TimePickerScreen

 const styles = StyleSheet.create({})