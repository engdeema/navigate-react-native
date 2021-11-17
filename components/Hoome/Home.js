import React from "react";
import { Button, Text } from "native-base";
import { View } from "react-native";
import { ImageBackground, StyleSheet } from "react-native";
import { styles } from "../Hoome/StyleSheet";
import { Dimensions } from "react-native";

const Home = ({ navigation }) => {
  const image = {
    uri: "https://play-lh.googleusercontent.com/fHr2pe1B7n_dvrFX3e-P-BFrsiMJ-nPh4_wn4Yj2vwlINS_Lb4CwK8qKGK8upu5to-RK",
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="contain" style={styles.image}>
        <Text style={styles.text} bold>
          Home Page
        </Text>
      </ImageBackground>

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
