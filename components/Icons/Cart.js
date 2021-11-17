import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

const Cart = ({ navigation }) => {
  return (
    <View>
      {/* <Text onPress={() => navigation.navigate("CartList")}>helloo </Text> */}
      <Icon
        size={40}
        name="cart"
        onPress={() => navigation.navigate("CartList")}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
