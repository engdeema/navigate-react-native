import { observer } from "mobx-react";
import React from "react";
import ShopItem from "./ShopItem";
import shopStore from "../Store/shopStore";
import { View, Text } from "react-native";
import { SimpleGrid } from "native-base";

function ShopList({ navigation }) {
  const newShop = shopStore.shops.map((shop) => (
    <ShopItem
      style={{ margin: 10 }}
      shop={shop}
      navigation={navigation}
      key={shop._id}
    />
  ));
  return (
    <View>
      <Text> Testing </Text>
      <SimpleGrid columns={3} spacing={10}>
        {newShop}
      </SimpleGrid>
    </View>
  );
}

export default observer(ShopList);
