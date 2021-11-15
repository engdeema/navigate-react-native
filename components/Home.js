import React from "react";
// import { Button, Center } from "native-base";
import { Button } from "native-base";

export const Home = () => {
  return (
    <Button
      size="lg"
      variant="outline"
      colorScheme="secondary"
      onPress={() => alert("WOOW AMAZING MAGIC")}
    >
      Deema's Test
    </Button>
  );
};

// export const Example = () => {
//   return (
//     <>
//       <Button onPress={() => console.log("hello world")}>Deema Check</Button>
//     </>
//   );
// };
export default () => {
  return (
    //     // <NativeBaseProvider>
    //     <Center flex={1} px="3">
    <Home />
    //     </Center>
    //     // {/* </NativeBaseProvider> */}
  );
};
