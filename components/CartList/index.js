import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import cartStore from "../../Store/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { Button } from "native-base";
import userAuthStore from "../../Store/authStore";

const CartList = ({ navigation }) => {
  const handlePress = () => {
    if (userAuthStore.user) {
      cartStore.checkout();
    } else {
      Alert.alert("Sign in", "Sign in to checkout", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Sign in", onPress: () => navigation.navigate("Signin") },
      ]);
    }
  };
  const newItems = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));
  return (
    <View>
      {newItems}

      <Text>Cart Total : {cartStore.totalQuantity}</Text>
      {/* <Button onPress={cartStore.checkout}>Checkout</Button> */}
      <Button onPress={handlePress}>Checkout</Button>
    </View>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({});
