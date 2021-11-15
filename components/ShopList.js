import { observer } from "mobx-react";
import React from "react";
import ShopItem from "./ShopItem";
import shopStore from "../Store/shopStore";
import { View, Text } from "react-native";

function ShopList() {
  const newShop = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));
  return (
    <View>
      <Text> Testing </Text>
      {newShop}
    </View>
  );
}

export default observer(ShopList);
