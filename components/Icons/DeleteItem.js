import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import cartStore from "../../Store/cartStore";

const DeleteItem = ({ productId }) => {
  return (
    <TouchableOpacity
      // style={styles.button}
      onPress={() => cartStore.removeItem(productId)}
    >
      <Icon
        size={50}
        name="trash-o"
        // onPress={() => cartStore.removeItem(productId)}
      />
    </TouchableOpacity>
  );
};

export default DeleteItem;

const styles = StyleSheet.create({});
