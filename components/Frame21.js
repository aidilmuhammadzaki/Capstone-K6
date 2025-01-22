import * as React from "react";
import { StyleSheet, View } from "react-native";
import Frame20 from "./Frame20";

const Frame21 = () => {
  return (
    <View style={styles.frame}>
      <Frame20 />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: 406,
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Frame21;
