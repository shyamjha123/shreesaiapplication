import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Login from "../(tabs)/Login";


const index = () => {
  return (
    <SafeAreaView style={styles.container}>
     <Login/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
});

export default index;
