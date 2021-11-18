import React from "react";
import { StyleSheet, Text, View } from "react-native";
import cartStore from "../../Store/cartStore";
import CartItem from "./CartItem";

const CartList = () => {
  const newItems = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));
  return (
    <View>
      {newItems}

      <Text>Cart Total : {cartStore.totalQuantity}</Text>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({});
