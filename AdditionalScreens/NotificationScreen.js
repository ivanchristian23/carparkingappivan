import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationScreen = (route,navigation) => {
  const {id} = route.params
  const [data, setData] = useState([])
  const fetchData = async () => {
    const docRef = doc(db, "customers", id);
    const docSnap = await getDoc(docRef);
    let temp = []
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().bookings);
      const items = docSnap.data().bookings
      items.forEach((i)=>{
        temp.push(i)
      })
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setData(temp)
  };
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parking Notification</Text>
      {data.map((x)=>{
         <View style={styles.notification}>
         <Text style={styles.notificationText}>
           Your car is parked at spot {x.parkingLot}.
         </Text>
         <Text style={styles.notificationText}>
           Remember to return before {x.endTime}.
         </Text>
       </View>
      })}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  notification: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
});

export default NotificationScreen;