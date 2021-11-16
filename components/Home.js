import React from "react";
import { Button, Text } from "native-base";
import { View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text bold>Home Page </Text>

      <Button
        size="lg"
        // variant="outline"
        colorScheme="secondary"
        onPress={() => navigation.navigate("ShopList")}
      >
        Shop List
      </Button>
    </View>
  );
};

export default Home;
