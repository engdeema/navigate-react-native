import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cart = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("CartList")}>helloo </Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
