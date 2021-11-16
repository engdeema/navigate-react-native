import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return <Text>Settings</Text>;
  // i can say <Text onPress={()=> navigation.navigate("Home)")} or any where
  // so inside settings line 4 i should send navigation as a prop,
  //go to Navigation page
}

const styles = StyleSheet.create({});
