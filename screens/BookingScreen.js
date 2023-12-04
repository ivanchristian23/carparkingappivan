import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '@rneui/themed';
import { getDocs, collection,getDoc,doc } from "firebase/firestore";
import { db } from "./config";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BookingScreen = ({ route }) => {
  const {id} = route.params
  const [show,setShow] = useState(false)
  const [data, setData] = useState([])
  const [ongoing,setOngoing] = useState([])
  const [completed,setCompleted] = useState([])
  const fetchData = async () => {
    const docRef = doc(db, "customers", id);
    const docSnap = await getDoc(docRef);
    let temp = []
    let tempOngoing = []
    let tempCompleted = []
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().bookings);
      const items = docSnap.data().bookings
      items.forEach((i)=>{
        temp.push(i)
        if (i.status == 'Ongoing'){
          tempOngoing.push(i)
        }
        else{
          tempCompleted.push(i)
        }
      })
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setOngoing(tempOngoing)
    setCompleted(tempCompleted)
    setData(temp)
  };
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={()=> setShow(false)}>
          <View style={styles.icon}>
            <Text style={{ alignSelf: 'center' }}>Ongoing</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setShow(true)}>
          <View style={styles.icon}>
            <Text style={{ alignSelf: 'center' }}>Completed</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <View style={styles.icon}>
            <Text style={{ alignSelf: 'center' }}>Canceled</Text>
          </View>
        </TouchableOpacity> */}

      </View>
      <Card height={"90%"} width={'90%'} containerStyle={{ borderRadius: 10 }}>
      <FlatList
        data={show? completed: ongoing }
        ItemSeparatorComponent={() => {
          <Text></Text>;
        }}
        renderItem={({ item }) => (
          
            <View style={styles.cardStyle}>
              <Image source={{ uri: item.picture }} style={styles.image_right} />
              <View style={{ justifyContent: 'space-evenly', paddingLeft: 20 }}>
                <Text>{item.name}</Text>
                <Text>{item.address}</Text>
                <Text>{item.payment} QR/ {item.hours}</Text>
                <View style={{ borderWidth: 2, borderColor: 'red', borderRadius: 5, height: 30, width: 75, paddingTop: 5 }}>
                  <Text style={{ alignSelf: 'center' }}>{item.status}</Text>
                </View>
              </View>
            </View>
          
        )} />
      </Card>
    </SafeAreaView>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  headerIcons: {
    flexDirection: 'row'
    , justifyContent: 'space-around'
  },
  icon: {
    borderColor: 'darkblue'
    , borderWidth: 2
    , borderRadius: 10
    , height: 35
    , width: 150,
    paddingTop: 5
  },
  cardStyle: {
    flexDirection: 'row',

  },
  image_right: {
    width: windowWidth / 4
    , height: windowHeight / 11,
    marginTop:20
  },
})