import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const validateInputs = () => {
    // Basic validation logic, you can customize it as needed
    if (!name.trim()) {
      alert('Please enter a valid name');
      return false;
    }

    if (!/^[0-9]{10}$/.test(mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number');
      return false;
    }

    // Add more validation for other fields (dob, email, gender) as needed

    return true;
  };

  const handleSaveProfile = () => {
    if (validateInputs()) {
      // Save profile logic goes here
      // You can send the data to your backend or perform any other actions
      alert('Profile saved successfully!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Mobile Number:</Text>
      <TextInput
        style={styles.input}
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={(text) => setDOB(text)}
        // You can use a date picker library for better user experience
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Gender:</Text>
      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={(text) => setGender(text)}
      />

      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

