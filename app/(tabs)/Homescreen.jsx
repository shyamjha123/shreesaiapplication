import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from "react-native";
// import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import Swiper from "react-native-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Homescreencontainer from "../common/Homescreencontainer";
import Homescreencards from "../common/Homescreencards";

const windowWidth = Dimensions.get("window").width;

const Homescreen = () => {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [walletData, setWalletData] = useState(null);
  const [loading, setLoading] = useState(true);

  const images = [
    require("../(tabs)/assests/fast.png"),
    require("../(tabs)/assests/ctc_resized.png"),
    require("../(tabs)/assests/hotel.png"),
    require("../(tabs)/assests/Bus.png"), // Update the path to your images
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1 < images.length ? prevIndex + 1 : 0;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);


  const fetchWalletBalance = async () => {
    try {
      const token = await AsyncStorage.getItem("token"); // Retrieve the stored token
      if (!token) {
        Alert.alert("Error", "User not authenticated. Token is missing.");
        return;
      }

      const response = await fetch(
        `https://zevopay.online/api/v1/wallet/balance`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in Authorization header
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setWalletData(data); // Set the fetched wallet data in state
      } else {
        Alert.alert("Error", data.message || "Failed to fetch wallet balance.");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "An error occurred while fetching the wallet balance."
      );
      console.error(error);
    } finally {
      setLoading(false); // Stop loading
      setRefreshing(false); // Stop the refresh indicator
    }
  };

  useEffect(() => {
    fetchWalletBalance();
  }, []);

  const onRefresh = () => {
    setRefreshing(true); // Show the refresh indicator
    fetchWalletBalance(); // Fetch the latest data
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (!walletData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load wallet balance.</Text>
      </View>
    );
  }
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >     
      <View style={styles.container}>
        <View style={styles.headercontainer}>
          <Link href="/Fundmanagement">
            <View style={styles.Mainwallet}>
              <Ionicons name="wallet" size={30} color="blue" />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ color: "blue" }}>Main Wallet</Text>
                <Text style={{ color: "black" }}>₹ {Number(walletData.balance).toFixed(2)}</Text>
              </View>
            </View>
          </Link>
          <View style={{ backgroundColor: "lightgray", width: 3 }}></View>
          <View style={styles.Aepswallet}>
            <Ionicons name="wallet" size={30} color="yellow" />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: "blue" }}>AEPS Wallet</Text>
              <Text style={{ color: "black" }}>₹ 0.00</Text>
            </View>
          </View>
        </View>
        <Swiper
          style={styles.swiper}
          autoplay
          loop
          showsPagination={false}
          activeDotColor="blue"
          dotColor="lightgray"
        >
          {images.map((image, index) => (
            <View key={index} style={styles.card}>
              <Image source={image} style={styles.image} resizeMode="contain" />
            </View>
          ))}
        </Swiper>

        <View style={{ alignItems: "center", marginBottom: 500 }}>
          <Homescreencontainer />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    // marginTop:20,
    backgroundColor: "white",
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "center",
  },
  headercontainer: {
    height: "5.4%",
    borderRadius: 10,
    marginTop: 50,
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowOpacity: 0.25,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    backgroundColor: "white",
  },
  Mainwallet: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  Aepswallet: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowOpacity: 0.25,
    borderRadius: 10,
    width: Dimensions.get("window").width - 80,
    height: 133,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Itemcontainer: {
    justifyContent: "space-between",
    marginTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    flexDirection: "row",
  },
  logocontainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  footercontainer: {
    backgroundColor: "#fff",
    marginTop: 20,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    shadowOpacity: 0.25,
    borderRadius: 10,
    flexDirection: "column",
    width: Dimensions.get("window").width - 50,
  },
  squareBox: {
    width: windowWidth * 0.3, // 50% of the screen's width
    height: windowWidth * 0.3, // Ensure the height is the same as width to make it a square
    backgroundColor: "#3A4E7A", // Matte blue background
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 7,
    gap: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  swiper: {
    marginTop: 40,
    borderRadius: 10,
    height: 133
  },
  Footeraftercontainer: {
    backgroundColor: "#fff",
    marginTop: 20,
    flexDirection: "column",
    width: Dimensions.get("window").width - 30,
  },
});

export default Homescreen;



