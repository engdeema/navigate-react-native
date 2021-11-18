import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import cartStore from "../../Store/cartStore";

// product.quantity : the amountt of products in storage
// item.quantiity : amount of user wants to buy

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const handleAdd = (value) => {
    cartStore.addItemToCart(product, value);
    setQuantity(value);
  };

  return (
    <View>
      <Text>{product.name}</Text>
      <NumericInput
        totalWidth={150}
        totalHeight={100}
        textColor="#cf5474"
        rounded
        minValue={1}
        maxValue={product.quantity}
        value={quantity}
        onChange={(value) => handleAdd(value)}

        // onChange={(value) => setQuantity(value)}
      />
    </View>
  );
};

export default observer(ProductItem);

const styles = StyleSheet.create({});
