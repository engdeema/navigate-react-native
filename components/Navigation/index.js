import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";

const Navigation = () => {
  //   const Stack = createStackNavigator();
  const { Navigator, Screen } = createStackNavigator();
  //   console.log(Stack);
  // navigation , routes are passed from screen
  // لانهم يعطون الباور باستخدام فنكشنز ريآكت نافيقيشن
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="ShopList" component={ShopList} />
      <Screen name="ShopDetail" component={ShopDetail} />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
