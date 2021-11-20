import React from "react";
import userAuthStore from "../../Store/authStore";

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
const Signup = ({ navigation }) => {
  const toast = useToast();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleSubmit = async () => {
    // console.log(user);
    await userAuthStore.signup(user, navigation, toast);
    // if (user) {
    //   navigation.navigate("CartList");
    // }
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
          You should have an account first{" "}
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

            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              onChangeText={(email) => setUser({ ...user, email })}
              placeholder={"Email"}
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
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              already have an account
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("Signin")}
            >
              Sign in
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signup;
