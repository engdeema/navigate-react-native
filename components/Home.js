import React from "react";
// import { Button, Center } from "native-base";
import { Button } from "native-base";

export const Example = () => {
  return (
    <Button size="lg" variant="outline" colorScheme="secondary">
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
    <Example />
    //     </Center>
    //     // {/* </NativeBaseProvider> */}
  );
};
