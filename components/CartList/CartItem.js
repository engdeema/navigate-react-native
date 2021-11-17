import React from "react";
import { StyleSheet, Text, View } from "react-native";
import baseURL from "../../Store/instance";

const CartItem = ({ item }) => {
  return (
    <View>
      <Text>{item.product.name}</Text>
      <Text>{item.product.price}</Text>
      <Text>{item.quantity}</Text>
      {/* <Image
        source={{ uri: baseURL + item.product.name }}
        style={{ width: 50, height: 50 }}
      /> */}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
