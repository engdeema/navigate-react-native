import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import baseURL from "../../Store/instance";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import cartStore from "../../Store/cartStore";
import { observer } from "mobx-react";

const CartItem = ({ item }) => {
  // item.quantity اول مايضيف اليوزر
  const [quantity, setQuantity] = useState(item.quantity);
  // this is not submit button or prevent default
  const handleAdd = (value) => {
    // const handleAdd = () => { هني بدون هاندل آدد لما تكون
    // داخل نيومرك فاليو
    // تكون فاضيه اذا في بتن آدد

    // quantity from user from use state
    cartStore.addItemToCart(item.product, value);
    setQuantity(value);
    // تكون كوانتيتي اذا اكو بتن
    // cartStore.addItemToCart(item.product, quantity);

    // {
    //   product: {
    //     _id: "6182a8b31bd7fa38942fdf23",
    //     name: "Cookie",
    //     price: 5,
    //     image:
    //       "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
    //   },
    //   quantity: 5,
    // },
  };
  return (
    <View>
      <NumericInput
        totalWidth={40}
        totalHeight={30}
        textColor="#cf5474"
        rounded
        minValue={1}
        maxValue={item.product.quantity}
        value={quantity}
        onChange={(value) => handleAdd(value)}

        // onChange={(value) => setQuantity(value)}
      />
      {/* <Button>Add</Button> */}
      <Text>{item.product.name}</Text>
      <Text>{item.product.price} KD</Text>
      <Text>{item.quantity}</Text>
      <Image
        source={{ uri: baseURL + item.product.image }}
        style={{ width: 50, height: 50 }}
      />
      <Text>
        {item.product.name}
        {/* {item.product.price}x{item.quantity} */}
      </Text>
      <Text>
        {item.product.price} x {item.quantity}KD
      </Text>
    </View>
  );
};

export default observer(CartItem);

const styles = StyleSheet.create({});
