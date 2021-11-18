import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import cartStore from "../../Store/cartStore";
import { Badge, Button } from "native-base";
import { observer } from "mobx-react";

const Cart = ({ navigation }) => {
  // بدل قيت توال اللي بالستور ممكن اسوي
  // let totalQuantity =0;
  // cartStore.items.forEach((item) => (total = total = item.quantity));
  // render it down
  return (
    <View>
      <Button
        endIcon={<Badge colorScheme="secondary" ml={1} rounded="md"></Badge>}
        mx={{
          base: "auto",
          md: 0,
        }}
      >
        {cartStore.totalQuantity}
        {/* {totalQuantity} */}
      </Button>
      {/* <Text onPress={() => navigation.navigate("CartList")}>helloo </Text> */}
      <Icon
        size={40}
        name="cart"
        onPress={() => navigation.navigate("CartList")}
      />
      <Text>{cartStore.totalQuantity}</Text>
    </View>
  );
};

export default observer(Cart);

const styles = StyleSheet.create({});
