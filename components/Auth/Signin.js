import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  useToast,
  //   NativeBaseProvider,
} from "native-base";
import { useState } from "react";
import userAuthStore from "../../Store/authStore";
const Signin = ({ navigation }) => {
  const toast = useToast();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    userAuthStore.signin(user, navigation, toast);
    // it is taking me to home page but anyone can go there
    // navigation.navigate("Home");
  };

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>User Name</FormControl.Label>
            {/* عشان مايصير اوفر رايت لازم نسوي ... */}
            <Input
              //   onChangeText={(value) => setUser({ ...user, password: value })}

              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              // key and the value are the same
              //   onChangeText={(value) => setUser({ ...user, password: value })}

              onChangeText={(password) => setUser({ ...user, password })}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signin;

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         <Example />
//       </Center>
//     </NativeBaseProvider>
//   );
// };
