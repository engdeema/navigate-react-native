import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
};

export default observer(ProductItem);

const styles = StyleSheet.create({});
