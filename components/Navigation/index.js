import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Hoome/Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
// import Settings from "../Icons/Settings";
import Title from "../Icons/Title";
import CartList from "../CartList";
import Cart from "../";
const Navigation = () => {
  //   const Stack = createStackNavigator();
  const { Navigator, Screen } = createStackNavigator();
  //   console.log(Stack);
  // navigation , routes are passed from screen
  // لانهم يعطون الباور باستخدام فنكشنز ريآكت نافيقيشن
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "pink" },
        headerTintColor: "white",
        headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "pink" },
          headerTitle: () => <Title />,
        }}
      />
      <Screen
        name="ShopList"
        component={ShopList}
        options={({ navigation }) => ({
          title: "Shops",
          // headerRight: () => <Cart navigation={navigation}
          // />,
        })}
        // <Settings /> لو تبين تكون داخلها seettings
        //options={({navigation})=> ({title:"Shops", headerRight: () => <Settings navigation={navigation}/> })}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        // options has access on route
        options={({ route }) => {
          return { title: route.params.shop.name };
        }}
        //{{ title: "Detail Of The Shop" }},
        //, headerShown: false, يشيل ستايل الهيدر في هذه الصفحه ويكون مختلف
      />

      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
