import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { Button } from "@rneui/base";

const TimePickerScreen = ({ route, navigation }) => {
  const { name, address, parkingLot, id,payment } = route.params;
  const [nowdate, setnowDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  // const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  // const [hour,setHours]= useState(0)
  const calculate = () => {
    const durationInMilliseconds = endTime - startTime;
    const durationInMinutes = Math.floor(durationInMilliseconds / (1000 * 60));
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    // Format the duration in hours and minutes
    const formattedDuration = `${hours} hours and ${minutes} minutes`;
    console.log(formattedDuration);
  };

  const showStartDatepicker = () => {
    setShowStartDatePicker(true);
    setShowStartTimePicker(false);
    setShowEndTimePicker(false);
  };

  const showStartTimepicker = () => {
    setShowStartTimePicker(true);
    setShowStartDatePicker(false);
    setShowEndTimePicker(false);
  };

  const showEndTimepicker = () => {
    setShowEndTimePicker(true);
    setShowStartDatePicker(false);
    setShowStartTimePicker(false);
  };

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(Platform.OS === "ios");
    setStartDate(currentDate);
  };

  const onChangeStartTime = (event, selectedTime) => {
    const currentTime = selectedTime || startTime;
    setShowStartTimePicker(Platform.OS === "ios");
    setStartTime(currentTime);
    setEndTime(currentTime);
  };

  // const onChangeEndDate = (event, selectedDate) => {
  //   const currentDate = selectedDate || endDate;
  //   setShowEndDatePicker(Platform.OS === 'ios');
  //   setEndDate(currentDate);
  // };

  const onChangeEndTime = (event, selectedTime) => {
    const currentTime = selectedTime || endTime;
    setShowEndTimePicker(Platform.OS === "ios");
    setEndTime(currentTime);
    calculate();
  };
  const validateDate = () => {
    if (nowdate.getTime() > startDate.getTime()) {
      alert("You can not book a date before today's date");
      return;
    }
    if (startTime.getTime() >= endTime.getTime()) {
      alert("End time should not be ahead than start time");
      return;
    }
    navigation.navigate("SelectVehicle", {
      name: name,
      address: address,
      parkingLot: parkingLot,
      id: id,
      payment:payment,
      startDate: startDate.toLocaleDateString(),
      startTime: startTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      endTime: endTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={showStartDatepicker} title="Pick start date" />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonContainer}>
          <Button onPress={showStartTimepicker} title="Pick start time" />
        </View>
        {/* <View style={styles.buttonContainer}>
        <Button onPress={showEndDatepicker} title="Pick end date" />
      </View> */}
        <View style={styles.buttonContainer}>
          <Button onPress={showEndTimepicker} title="Pick end time" />
        </View>
      </View>

      <View style={styles.dateTimeContainer}>
        {showStartDatePicker && (
          <DateTimePicker
            testID="startDatePicker"
            value={startDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeStartDate}
          />
        )}
        {showStartTimePicker && (
          <DateTimePicker
            testID="startTimePicker"
            value={startTime}
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={onChangeStartTime}
          />
        )}
        {/* {showEndDatePicker && (
          <DateTimePicker
            testID="endDatePicker"
            value={endDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeEndDate}
          />
        )} */}
        {showEndTimePicker && (
          <DateTimePicker
            testID="endTimePicker"
            value={endTime}
            mode="time"
            is24Hour={true}
            display="default"
            minuteInterval={30}
            onChange={onChangeEndTime}
          />
        )}
      </View>
      <View style={styles.selectedDateTimeContainer}>
        <View style={{ alignSelf: "center" }}>
          <Text style={styles.selectedDateTimeText}>
            Start Date: {startDate.toLocaleDateString()}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.selectedDateTimeText}>
            Start Time:{" "}
            {startTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
          {/* <Text style={styles.selectedDateTimeText}>
          End Date: {endDate.toLocaleDateString()}
        </Text> */}
          <Text style={styles.selectedDateTimeText}>
            End Time:{" "}
            {endTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
        <Text />
      </View>
      <Button
        title="Confirm"
        buttonStyle={{ backgroundColor: "darkblue", width: 350 }}
        onPress={validateDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    marginLeft: 20,
  },
  dateTimeContainer: {
    marginTop: 20,
  },
  selectedDateTimeContainer: {
    marginTop: 30,
  },
  selectedDateTimeText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    marginLeft: 20,
  },
});

export default TimePickerScreen;
