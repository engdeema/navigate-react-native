import { observer } from "mobx-react";
import React from "react";
import ShopItem from "./ShopItem";
import shopStore from "../Store/shopStore";
import { View, Text } from "react-native";

function ShopList({ navigation }) {
  const newShop = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} navigation={navigation} key={shop._id} />
  ));
  return (
    <View>
      <Text> Testing </Text>
      {newShop}
    </View>
  );
}

export default observer(ShopList);
