import React from "react";
import { Image, View, Text } from "react-native";
import { baseURL } from "../Store/instance";
import shopStore from "../Store/shopStore";
import { observer } from "mobx-react";
import { Button, Spinner } from "native-base";
import ProductList from "../components/ProductList";
function ShopDetail({ navigation, route }) {
  if (shopStore.isLoading) return <Spinner />;
  // const shop = shopStore.shops[5];
  const shop = route.params.shop;
  return (
    <View>
      <Text> Shop Detail </Text>
      <Text>{shop.name}</Text>

      <Image
        source={{ uri: baseURL + shop.image }}
        style={{ width: 50, height: 50 }}
      />
      <ProductList products={shop.products} />
      {/* <Button></Button> */}
    </View>
  );
}

export default observer(ShopDetail);
