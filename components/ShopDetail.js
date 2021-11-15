import React from "react";
import { Image, View, Text } from "react-native";
import { baseURL } from "../Store/instance";
import shopStore from "../Store/shopStore";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

function ShopDetail() {
  if (shopStore.isLoading) return <Spinner />;
  const shop = shopStore.shops[1];
  return (
    <View>
      <Text> is it working?? </Text>
      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}

export default observer(ShopDetail);
