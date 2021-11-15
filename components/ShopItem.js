import React from "react";
import { observer } from "mobx-react";
import { baseURL } from "../Store/instance";
import { Image, View, Text } from "react-native";

function ShopItem({ shop }) {
  // concatinate url from instance with the pic from backend
  return (
    <View>
      <Text>{shop.name}</Text>

      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}

export default observer(ShopItem);
