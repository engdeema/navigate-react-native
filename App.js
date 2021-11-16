import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import { NativeBaseProvider, Box } from "native-base";
// import ShopList from "./components/ShopList";
import ShopDetail from "./components/ShopDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./components/Navigation";

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Box>Hello world</Box>
//       {/* <Home /> */}
//     </NativeBaseProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import {
  Heading,
  AspectRatio,
  Image,
  Center,
  HStack,
  Stack,
} from "native-base";
// import ShopDetail from "./components/ShopDetail";
export const Example = () => {
  return (
    <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Deema's First App.
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            Welcome to My First App.
          </Text>
        </Stack>
        <Text fontWeight="400">Test my first App.</Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Center>
          <View>
            <Navigation />
          </View>
        </Center>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
