import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React from "react";
import CommonCards from "../common/CommonCards"; // Adjust the path as necessary
import { Link, useRouter } from "expo-router";
const Report = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <CommonCards
          onPress={() => router.push("/NewvirtualReport")}
          iconname={"wallet-outline"}
          color={"#007BB5"}
          text={"New Virtual Report"}
          footertext={"Track your virtual report"}
        />

        <CommonCards
          onPress={() => router.push("/Dmtreport")}
        />

        <CommonCards
          onPress={() => router.push("/Payoutreport", { customTitle: "My Payout History" })}
          iconname={"wallet-outline"}
          color={"#007BB5"}
          text={"Payout Report"}
          footertext={"Track your Payout report"}
        />

        <CommonCards
          onPress={() => router.push("/Upitransactionreport")}
          iconname={"wallet"}
          color={"goldenrod"}
          text={"UPI Transaction Report"}
          footertext={"Check your UPI transactions here"}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
  scrollContainer: {
    paddingVertical: 20, // Optional: add padding to the top and bottom of the scroll content
    gap: 20
  },
});

export default Report;
