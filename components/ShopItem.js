import React from "react";
import { observer } from "mobx-react";
import { baseURL } from "../Store/instance";
import { Image, View, Text } from "react-native";

function ShopItem({ shop, navigation }) {
  // concatinate url from instance with the pic from backend
  // passing shop to shop detail i will get it from routr from detail
  return (
    <View>
      <Text onPress={() => navigation.navigate("ShopDetail", { shop: shop })}>
        {shop.name}
      </Text>

      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}

export default observer(ShopItem);
