import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./config";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import filter from "lodash.filter";
import { Dimensions } from "react-native";
import { Button } from "@rneui/themed";
import { Feather } from "react-native-vector-icons";
import { ActivityIndicator } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = ({ navigation,route }) => {
  const [search, setSearch] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [popularPlaces, setPopularPlaces] = useState([]);
  const {id} = route.params
  useEffect(() => {
    fetchData();
    fetchPopularPlace();
    setLoading(false)
  }, []);
  const fetchData = async () => {
    const docs = await getDocs(collection(db, "parkingAreas"));
    let temp = [];
    docs.forEach((doc) => {
      temp.push(doc.data());
    });
    setData(temp);
    setFullData(temp);
    setLoading(false)
  };
  const fetchPopularPlace = async () => {
    const docs = await getDocs(collection(db, "popularAreas"));
    let temp = [];
    docs.forEach((doc) => {
      temp.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
    setPopularPlaces(temp);
    
  };

  const handleSearch = (query) => {
    setSearch(true);
    setSearchQuery(query);
    const queryLowercase = query.toLowerCase();
    const Datafiltered = filter(fullData, (place) => {
      return contains(place, queryLowercase);
    });
    setData(Datafiltered);
  };
  const contains = (place, query) => {
    if (
      place.name.toLowerCase().includes(query) ||
      place.address.toLowerCase().includes(query)
    ) {
      return true;
    }
    return false;
  };
  const backButton = () =>{
    setSearch(false)
    setSearchQuery("")
  }
  return (
    <SafeAreaView>
      {search ? (
        <View style={styles.container}>
          <Feather
            name="arrow-left"
            size={30}
            onPress={backButton}
          />
          <Text />
          <TextInput
            placeholder="Search.."
            clearButtonMode="always"
            style={styles.searchstyle}
            autoCapitalize="none"
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)
            }
          />
          <FlatList
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) =>
              isLoading ? (
                <ActivityIndicator size="large" color="#00ff00" />
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate("DetailScreen")}
                >
                  <View style={styles.itemContainer}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.picture }}
                    />
                    <View>
                      <Text style={styles.textName}>{item.name}</Text>
                      <Text style={styles.textAddress}>{item.address}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }
          />
        </View>
      ) : (
        <View style={styles.container}>
          <TextInput
            placeholder="Search.."
            clearButtonMode="always"
            style={styles.searchstyle}
            autoCapitalize="none"
            autoCorrect={false}
            value={searchQuery}
            onChangeText={(query) => handleSearch(query)}
          />
          <Text></Text>
          <Text style={styles.mainText}>Popular Parking Places</Text>
          <Text />
          <FlatList
          data={popularPlaces}
          keyExtractor={(item)=> item.parking}
          renderItem={({item}) =>
          isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) :
          <View style={styles.container}>
              <Text style={styles.TitleText}>{item.parking}</Text>
              <Text />
              <Image
                style={styles.mainImage}
                source={{uri: item.picture}}
              />
              <Text />
              <View style={styles.icons}>
                <View style={styles.iconText}>
                  <Text style={{ alignSelf: "center", color: "darkblue" }}>
                    {item.distance}
                  </Text>
                </View>
                <View style={styles.iconText}>
                  <Text style={{ alignSelf: "center", color: "darkblue" }}>
                    {item.vacant}
                  </Text>
                </View>
                <View style={styles.iconText}>
                  <Text style={{ alignSelf: "center", color: "darkblue" }}>
                    {item.status}
                  </Text>
                </View>
              </View>
              <Text />
              <Button title="Book Now" containerStyle={{ borderRadius: 5 }} onPress={()=> navigation.navigate("DetailScreen",{address:item.address, distance:item.distance, picture:item.picture, name:item.name, status:item.status, vacant:item.vacant,id1:id})} />
            </View>
        }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  searchstyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
  textAddress: {
    fontSize: 14,
    marginLeft: 10,
    color: "grey",
  },
  mainText: {
    alignSelf: "center",
    fontSize: 20,
  },
  mainImage: {
    alignSelf: "center",
    height: windowHeight / 3.5,
    width: windowWidth / 1.5,
    borderRadius: 5,
  },
  TitleText: {
    fontSize: 17,
    paddingLeft: 10,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconText: {
    borderRadius: 10,
    borderColor: "darkblue",
    borderWidth: 2,
    height: 25,
    width: 80,
  },
});
