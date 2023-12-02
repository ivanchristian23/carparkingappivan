// HelpPage.js

import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';

const HelpPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Car Parking App Help</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Finding a Parking Spot</Text>
        <Text style={styles.sectionText}>
          To find a parking spot, use the app's search feature or you can check the most popular parking places. It will display available parking spaces near your location.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Reserving a Parking Spot</Text>
        <Text style={styles.sectionText}>
          To reserve a parking spot, tap on the desired location and follow the on-screen instructions to confirm your reservation.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Managing Reservations</Text>
        <Text style={styles.sectionText}>
          In the app, you can view and manage your reservations. Navigate to the "Bookings" section to see details and make changes.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Contact Support</Text>
        <Text style={styles.sectionText}>
          If you encounter any issues or have questions, contact our support team at support@ipark.com.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
  },
});

export default HelpPage;