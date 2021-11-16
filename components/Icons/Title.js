import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Title() {
  return (
    <Image
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5NJMijwdlbSdFcmn7ow921GfLBsfOEw1bg&usqp=CAU",
      }}
      style={{ width: 50, height: 50 }}

      //   style={styles.imageSize}
    />
  );
}

const styles = StyleSheet.create({});
